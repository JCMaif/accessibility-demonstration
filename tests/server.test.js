import fetch from 'node-fetch';

(async () => {
  try {
    // Check if the server is running
    const response = await fetch('http://localhost:3000');
    if (!response.ok) {
      throw new Error(`Server responded with status ${response.status}`);
    }

    // Check if index.html is served
    const html = await response.text();
    if (!html.includes('<html')) {
      throw new Error('index.html is not served correctly');
    }

    // Check if style.css is served
    const cssResponse = await fetch('http://localhost:3000/style.css');
    if (!cssResponse.ok) {
      throw new Error('style.css is not served correctly');
    }

    console.log('All server tests passed!');
  } catch (error) {
    console.error('Server test failed:', error.message);
    process.exit(1);
  }
})();