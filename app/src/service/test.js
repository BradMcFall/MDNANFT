export async function getTest() {
    const response = await fetch('/api/test');
    return await response.json();
}
