const apiGetHelper = async ({ url }) => {
     try {
          let headers = {
               'Content-type': 'application/json; charset=UTF-8'
          };
          const responseData = await fetch(url, {
               method: 'GET',
               headers
          });
          return responseData.json();
     } catch (e) {
          return e || {};
     }
};

export const getReq = (req) => {
     const response = apiGetHelper(req);
     return response;
};
