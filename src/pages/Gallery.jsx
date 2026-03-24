export default function Gallery() {
console.log("Gallery component rendered");
    return (
        <div style={{ background: 'var(--bg-dark)', color: '#fff', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <h1 style={{ fontSize: '2rem', fontFamily: 'var(--font-serif)' }}>This is the Gallery component</h1>
        </div>
    )
}