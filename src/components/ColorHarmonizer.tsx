import React, { useState } from 'react';
import './../styles/ColorHarmonizer.scss';

const ColorHarmonizer: React.FC = () => {

    const [hue, setHue] = useState<number>(180);

    // SOLO UNOOOOOOOOOOOO
    const colors = {
        base: `hsl(${hue}, 70%, 50%)`,
        complementary: `hsl(${(hue + 180) % 360}, 70%, 50%)`,
        triadA: `hsl(${(hue + 120) % 360}, 70%, 50%)`,
        triadB: `hsl(${(hue + 240) % 360}, 70%, 50%)`,
    };

    return (
        <section className="harmonies">

            <h2>Armonizador de Colores</h2>

            <label htmlFor="hueRange">
                Selecciona el tono
            </label>

            <input
                id="hueRange"
                type="range"
                min="0"
                max="360"
                value={hue}
                onChange={(e) => setHue(Number(e.target.value))}
            />

            {/* UNO SOLOOOOO */}
            <div className="main-object">

                <div
                    className="color-part"
                    style={{ backgroundColor: colors.base }}
                >
                    Base
                </div>

                <div
                    className="color-part"
                    style={{ backgroundColor: colors.complementary }}
                >
                    Complementario
                </div>

                <div
                    className="color-part"
                    style={{ backgroundColor: colors.triadA }}
                >
                    Triada A
                </div>

                <div
                    className="color-part"
                    style={{ backgroundColor: colors.triadB }}
                >
                    Triada B
                </div>

            </div>

        </section>
    );
};

export default ColorHarmonizer;