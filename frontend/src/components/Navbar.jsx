export function Header() {
    return (
        <header style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            width: '100%',
            //se fue el z-index 9999
            height: '80px', //antes era 60, pero era mucho
            backgroundColor: '#800020'
        }}>
        </header>
    )
}

//no tiene tailwind, uso css puro