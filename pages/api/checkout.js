export default function handler(req, res) {
  // For demonstration, return a Mercado Pago test link.
  // In a real app, you’d create a preference with MP SDK and return its init_point.
  res.status(200).json({
    init_point: 'https://www.mercadopago.com.ar'
  })
}
