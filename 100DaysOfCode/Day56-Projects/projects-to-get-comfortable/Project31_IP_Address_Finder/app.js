// Select Elements
const form = document.getElementById('ipForm');
const ipInput = document.getElementById('ipInput');
const searchBtn = document.getElementById('searchBtn');
const myIpBtn = document.getElementById('myIpBtn');
const loader = document.getElementById('loader');
const errorMessage = document.getElementById('errorMessage');
const errorText = document.getElementById('errorText');
const resultContainer = document.getElementById('resultContainer');

// Output nodes
const resIp = document.getElementById('resIp');
const resType = document.getElementById('resType');
const resLocation = document.getElementById('resLocation');
const resTimezone = document.getElementById('resTimezone');
const resIsp = document.getElementById('resIsp');
const resAsn = document.getElementById('resAsn');

// Regular expression for validating IP (IPv4 or IPv6 broadly)
const ipRegex = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$|^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/;

// API Endpoints
const IP_API_BASE = 'https://ipapi.co';

// Helper to show/hide UI sections
const toggleSections = (state) => {
    // Hide all initially
    loader.classList.add('hidden');
    errorMessage.classList.add('hidden');
    resultContainer.classList.add('hidden');
    // Show correct one based on state
    if (state === 'loader') loader.classList.remove('hidden');
    if (state === 'error') errorMessage.classList.remove('hidden');
    if (state === 'result') resultContainer.classList.remove('hidden');
};

const showError = (message) => {
    errorText.textContent = message;
    toggleSections('error');
};

// Update DOM with fetched data
const updateUI = (data) => {
    if (data.error) {
        showError(data.reason || 'Invalid IP or Rate Limit Exceeded.');
        return;
    }

    resIp.textContent = data.ip || 'Unknown';
    resType.textContent = data.version || 'Unknown';
    
    // Construct Location 
    const locArr = [];
    if (data.city) locArr.push(data.city);
    if (data.region) locArr.push(data.region);
    if (data.country_name) locArr.push(data.country_name);
    resLocation.textContent = locArr.length > 0 ? locArr.join(', ') : 'N/A';

    resTimezone.textContent = data.timezone || 'N/A';
    resIsp.textContent = data.org || data.asn || 'N/A';
    resAsn.textContent = data.asn || 'N/A';

    toggleSections('result');
};

// Async fetch to get IP data
const fetchIpData = async (ip = '') => {
    toggleSections('loader');
    
    // Ensure accurate URL structure:If ip string is empty, the API provides details for the request's IP.
    const url = ip ? `${IP_API_BASE}/${ip}/json/` : `${IP_API_BASE}/json/`;

    try {
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error(`Failed to fetch: ${response.status}`);
        }

        const data = await response.json();
        updateUI(data);
    } catch (error) {
        console.error('API Error:', error);
        showError('Unable to fetch IP details. Please try again later.');
    }
};

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const ip = ipInput.value.trim();

    if (!ip) {
        showError('Please enter an IP address.');
        return;
    }

    // Checking if the IP is valid before pinging API
    if (!ipRegex.test(ip)) {
        showError('Please enter a valid IPv4 or IPv6 address.');
        return;
    }

    fetchIpData(ip);
});

myIpBtn.addEventListener('click', () => {
    ipInput.value = ''; // clear input
    fetchIpData(''); // fetch the user's IP address
});
