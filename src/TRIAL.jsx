export default function Trial() {
console.log("Trial component rendered");
    return (
        <div style={{ background: 'var(--bg-dark)', color: '#fff', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <h1 style={{ fontSize: '2rem', fontFamily: 'var(--font-serif)' }}>This is a trial component</h1>
        </div>
    )
}