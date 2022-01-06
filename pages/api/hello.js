let position = 0;

(async () => {
    while(true) {
        await sleep(1000);
        position++;
    }
})();

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export default function handler(req, res) {
    res.status(200).json({ name: 'John Doe', to: position })
}
