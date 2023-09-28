import paymentsRepo from '../../helpers/payments-repo'

export async function POST(request) { 
  const res = await request.json()

  console.log(res)

  // Aca podemos llamar el save del pago de la transferencia.
  return Response.json({ res })
}

export async function GET(){
  return Response.json(paymentsRepo.getAll())
}