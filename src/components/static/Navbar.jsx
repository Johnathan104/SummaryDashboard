import React from "react";
import "../../App.css";

const Navbar = () => {
	return (
		<nav  style={{ backgroundColor: '#fff', padding: '1rem',paddingLeft:'3rem', paddingRight:'3rem', position: 'sticky', top: 0, width: '100%', zIndex: 100 }}>
            <div className="container">
                <ul style={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0 }}>
                            <li style={{ marginRight: '1.5rem' }}>
                                <button style={{ background: 'none', color: '#000', border: 'none', cursor: 'pointer', fontSize: '1rem', fontWeight: 'bold' }}>
                                    ProSummary
                                </button>
                            </li>
                    <li style={{ marginRight: '1.5rem' }}>
                        <button style={{ background: 'none', color: '#000', border: 'none', cursor: 'pointer', fontSize: '1rem' }}>
                            About
                        </button>
                    </li>
                    <li>
                        <button style={{ background: 'none', color: '#000', border: 'none', cursor: 'pointer', fontSize: '1rem' }}>
                            Contact
                        </button>
                    </li>
                </ul>
            </div>
			
		</nav>
	);
};

export default Navbar;
