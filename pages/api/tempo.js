async function tempo(request, response){
    // const usuarioPloneAdmin = process.env.USER_PLONE_ADMIN;
    // const senhaPloneAdmin = process.env.PASS_PLONE_ADMIN;

    const dynamicDate = new Date();
    // const cnpj = '13878352000196'

    // // const subscribersResponse = await fetch(`https://publica.cnpj.ws/cnpj/${cnpj}`)
    // const subscribersResponse = await fetch("http://200.129.173.67:8080/editais/@site",
    //     {
    //         method:'get', 
    //         headers:{'Accept':'application/json'}
    //     }
    // )
    // const subscribersResponseJson = await subscribersResponse.json();

    //response.setHeader('Cache-Control','s-maxage=10,stale-while-reavalidate');

    response.json(
        {
            date: dynamicDate.toGMTString(),
            // resposta: subscribersResponseJson
        }
    );

}

export default tempo;