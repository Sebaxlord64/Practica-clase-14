import React, { useEffect, useState } from 'react';
import './../styles/ContrastChecker.scss';

const ContrastChecker: React.FC = () => {

    // COLOR QUEMADO INICIAL
    const [bgColor, setBgColor] = useState<string>('#646cff');

    // FUNCION PARA GENERAR COLOR ALEATORIO
    const generateRandomColor = (): string => {
        const letters = '0123456789ABCDEF';
        let color = '#';

        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }

        return color;
    };

    // CAMBIO AUTOMATICO CADA 2 SEGUNDOS
    useEffect(() => {

        const interval = setInterval(() => {
            setBgColor(generateRandomColor());
        }, 2000);

        return () => clearInterval(interval);

    }, []);

    return (
        <section className="contrast-tool">

            <h3>Objeto Aleatorio 2D</h3>

            <div
                className="preview-box"
                style={{
                    backgroundColor: bgColor
                }}
            >
                <p style={{ color: '#000000' }}>
                    Texto Negro
                </p>

                <p style={{ color: '#ffffff' }}>
                    Texto Blanco
                </p>

                <span className="hex-code">
                    {bgColor}
                </span>

            </div>

        </section>
    );
};

export default ContrastChecker;