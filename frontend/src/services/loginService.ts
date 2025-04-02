type FetchLogin = (email: string, password: string) => Promise<any>;

export const fetchLogin: FetchLogin = async (email, password) => {
  try {
    let response:any = await fetch('http://localhost:8000/api/v1/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', 
      },
      body: JSON.stringify({ email, password }),
    });
    response = await response.json();
    return response
  } catch (error) {
    throw error; 
  }
};
