"use client";

import { useState } from "react";

export default function Home() {
  const [roundTrip, setRoundTrip] = useState(true);
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [departure, setDeparture] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [pets, setPets] = useState(0);
  const [searching, setSearching] = useState(false);

  function searchFlights() {
    setSearching(true);

    setTimeout(() => {
      setSearching(false);
      alert(
        "La interfaz de eveve está funcionando. En el siguiente paso conectaremos los vuelos reales."
      );
    }, 800);
  }

  return (
    <main className="page">
      <header className="header">
        <div className="logo">
          <span className="logoMark">e</span>
          <span>eveve</span>
        </div>

        <nav>
          <a href="#buscar">Buscar vuelos</a>
          <a href="#mecap">Mecap</a>
          <a href="#efi">Efi</a>
          <a href="#flexi">Flexi</a>
          <a href="/agent">Agente</a>
        </nav>
      </header>

      <section className="hero">
        <div className="heroText">
          <span className="badge">✈ Comparador de vuelos</span>

          <h1>
            Encuentra tu vuelo.
            <br />
            <strong>eveve encuentra el mejor.</strong>
          </h1>

          <p>
            Comparamos vuelos nacionales e internacionales para encontrar
            precios, horarios, equipaje y las mejores combinaciones.
          </p>
        </div>

        <div className="searchBox" id="buscar">
          <div className="tripButtons">
            <button
              className={roundTrip ? "active" : ""}
              onClick={() => setRoundTrip(true)}
            >
              Ida y vuelta
            </button>

            <button
              className={!roundTrip ? "active" : ""}
              onClick={() => setRoundTrip(false)}
            >
              Solo ida
            </button>
          </div>

          <div className="searchGrid">
            <div className="field">
              <label>Desde</label>
              <input
                value={origin}
                onChange={(e) => setOrigin(e.target.value)}
                placeholder="Madrid, MAD"
              />
            </div>

            <div className="swap">⇄</div>

            <div className="field">
              <label>Hasta</label>
              <input
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                placeholder="Barcelona, BCN"
              />
            </div>

            <div className="field">
              <label>Salida</label>
              <input
                type="date"
                value={departure}
                onChange={(e) => setDeparture(e.target.value)}
              />
            </div>

            {roundTrip && (
              <div className="field">
                <label>Regreso</label>
                <input
                  type="date"
                  value={returnDate}
                  onChange={(e) => setReturnDate(e.target.value)}
                />
              </div>
            )}

            <div className="field">
              <label>Adultos</label>
              <select
                value={adults}
                onChange={(e) => setAdults(Number(e.target.value))}
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
                  <option key={n} value={n}>
                    {n}
                  </option>
                ))}
              </select>
            </div>

            <div className="field">
              <label>Niños</label>
              <select
                value={children}
                onChange={(e) => setChildren(Number(e.target.value))}
              >
                {[0, 1, 2, 3, 4, 5, 6].map((n) => (
                  <option key={n} value={n}>
                    {n}
                  </option>
                ))}
              </select>
            </div>

            <div className="field">
              <label>Mascotas</label>
              <select
                value={pets}
                onChange={(e) => setPets(Number(e.target.value))}
              >
                {[0, 1, 2, 3].map((n) => (
                  <option key={n} value={n}>
                    {n}
                  </option>
                ))}
              </select>
            </div>

            <button
              className="searchButton"
              onClick={searchFlights}
              disabled={searching}
            >
              {searching ? "Buscando..." : "Buscar vuelos"}
            </button>
          </div>

          <div className="quickFilters">
            <span>Filtros rápidos:</span>
            <button>Directos</button>
            <button>1 escala</button>
            <button>2 escalas</button>
            <button>Equipaje</button>
            <button>Aeropuertos cercanos</button>
          </div>
        </div>
      </section>

      <section className="recommendations">
        <div className="sectionTitle">
          <span>La tecnología de eveve</span>
          <h2>Tres formas de encontrar tu vuelo</h2>
        </div>

        <div className="cards">
          <article className="card mecap" id="mecap">
            <div className="cardIcon">€</div>
            <span className="cardLabel">MECAP</span>
            <h3>Mejor precio</h3>
            <p>
              Busca la combinación con el precio total más bajo, teniendo en
              cuenta vuelos, escalas y equipaje.
            </p>
            <div className="cardBottom">
              <span>Precio total</span>
              <span>→</span>
            </div>
          </article>

          <article className="card efi" id="efi">
            <div className="cardIcon">⚡</div>
            <span className="cardLabel">EFI</span>
            <h3>Más eficiente</h3>
            <p>
              Prioriza vuelos directos y rápidos y busca la configuración de
              equipaje más económica.
            </p>
            <div className="cardBottom">
              <span>Tiempo + precio</span>
              <span>→</span>
            </div>
          </article>

          <article className="card flexi" id="flexi">
            <div className="cardIcon">↔</div>
            <span className="cardLabel">FLEXI</span>
            <h3>Fechas flexibles</h3>
            <p>
              Compara días cercanos para encontrar diferencias de precio antes
              de decidir cuándo viajar.
            </p>
            <div className="cardBottom">
              <span>± 3 días</span>
              <span>→</span>
            </div>
          </article>
        </div>
      </section>

      <section className="features">
        <div>
          <span className="featureIcon">🔎</span>
          <h3>Comparación real</h3>
          <p>
            La arquitectura está preparada para conectar proveedores reales de
            vuelos.
          </p>
        </div>

        <div>
          <span className="featureIcon">🧳</span>
          <h3>Equipaje</h3>
          <p>
            Podremos comparar el precio final incluyendo equipaje de mano y
            facturado.
          </p>
        </div>

        <div>
          <span className="featureIcon">🔔</span>
          <h3>Alertas</h3>
          <p>
            Recibe avisos cuando el precio de un vuelo cambie según las reglas
            configuradas.
          </p>
        </div>

        <div>
          <span className="featureIcon">🛰️</span>
          <h3>Seguimiento</h3>
          <p>
            El área de agente podrá mostrar el estado y seguimiento de los
            vuelos.
          </p>
        </div>
      </section>

      <footer>
        <div className="logo">
          <span className="logoMark">e</span>
          <span>eveve</span>
        </div>

        <span>
          Comparador de vuelos · Nacional e internacional
        </span>
      </footer>
    </main>
  );
}
