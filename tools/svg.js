const svg = require('svg-parser');


const elem = svg.parse(`
<svg viewBox="0 0 24 24" fill="">
<path d="M14.72 17.64c-.32.28-.83.56-1.23.69-1.14.38-2.27-.07-3.05-.71-.11-.09-.07-.26.06-.31 1.19-.38 1.89-1.3 2.09-2.22.2-.88-.16-1.64-.31-2.51-.12-.72-.11-1.34.12-2 .04-.11.2-.13.25-.02.71 1.59 2.72 2.29 3.07 4.04.03.16.05.32.05.48.03.94-.37 1.95-1.05 2.56m2.83-8.02c-.75-.7-1.63-1.2-2.36-1.93-1.49-1.51-2-3.64-1.34-5.66.11-.33-.2-.63-.51-.49-.71.31-1.39.76-1.98 1.24C8.38 5.2 7.27 9.26 8.65 12.92c.03.13.08.26.08.39 0 .26-.16.5-.39.6-.26.12-.54.04-.74-.15-.06-.06-.12-.12-.17-.19-.96-1.26-1.32-2.95-1.05-4.52.07-.4-.43-.62-.67-.31-1.21 1.57-1.81 3.67-1.69 5.65.04.59.13 1.18.29 1.75.2.71.49 1.4.88 2.03 1.21 2.01 3.34 3.46 5.63 3.75 2.43.31 5.06-.14 6.94-1.87 2.09-1.93 2.85-5 1.73-7.68-.04-.11-.09-.21-.14-.32-.25-.52-.55-1.01-.91-1.45-.27-.36-.57-.68-.89-.98z"></path>
</svg>
`);

console.dir(elem.children[0].properties);