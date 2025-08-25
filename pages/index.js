import { useState } from 'react'

export default function Home() {
  const times = ['8hs', '9hs', '18hs', '19hs', '20hs', '21hs']
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [selected, setSelected] = useState([])

  const toggleTime = (time) => {
    setSelected((prev) =>
      prev.includes(time) ? prev.filter((t) => t !== time) : [...prev, time]
    )
  }

  const handleReserve = () => {
    if (!name || !phone || selected.length === 0) {
      alert('Por favor ingresa tu nombre, celular y selecciona horarios')
      return
    }
    alert(`Reserva confirmada para ${name} (${phone}) en: ${selected.join(', ')}`)
  }

  const handlePay = async () => {
    try {
      const res = await fetch('/api/checkout')
      const data = await res.json()
      if (data.init_point) {
        // redirect to Mercado Pago checkout
        window.location.href = data.init_point
      } else {
        alert('Error al iniciar el pago')
      }
    } catch (err) {
      alert('Error al iniciar el pago')
    }
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-black text-white p-4">
        <h1 className="text-xl font-bold text-amber-500">ChronosFit</h1>
      </header>
      <main className="max-w-2xl mx-auto p-4">
        <h2 className="text-lg font-semibold mb-4">Reserva tu clase</h2>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border p-2 w-full mb-2"
          />
          <input
            type="tel"
            placeholder="Celular"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="border p-2 w-full"
          />
        </div>
        <div className="mb-4">
          <p className="mb-2 font-medium">Horarios:</p>
          <div className="grid grid-cols-3 gap-2">
            {times.map((time) => (
              <button
                key={time}
                onClick={() => toggleTime(time)}
                className={`p-2 border rounded ${
                  selected.includes(time) ? 'bg-amber-500 text-white' : 'bg-white'
                }`}
              >
                {time}
              </button>
            ))}
          </div>
        </div>
        <div className="flex gap-4">
          <button
            onClick={handleReserve}
            className="bg-green-600 text-white px-4 py-2 rounded disabled:opacity-50"
            disabled={!name || !phone || selected.length === 0}
          >
            Confirmar reserva
          </button>
          <button
            onClick={handlePay}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Pagar
          </button>
        </div>

        <div className="mt-6">
          <h2 className="text-lg font-semibold mb-2">Ubicación</h2>
          <div className="w-full h-64">
            <iframe
              src="https://maps.google.com/maps?q=C.%20Lavalle%201992%2C%20San%20Martín%2C%20Mendoza&z=15&output=embed"
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </main>
    </div>
  )
}
