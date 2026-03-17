export default function Location() {
console.log("Location component rendered");
    return (
        <div style={{ background: 'var(--bg-dark)', color: '#fff', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <h1 style={{ fontSize: '2rem', fontFamily: 'var(--font-serif)' }}>This is the Location component</h1>
        </div>
    )
}