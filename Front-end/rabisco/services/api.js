const baseURL = 'http://localhost:80';


/* USANDO FETCH API */
export const getProdutos = async () => {
  try {
    const response = await fetch(`${baseURL}/produto`);
    if (!response.ok) {
      throw new Error('Erro ao buscar produtos');
    }
    return await response.json();
  } catch (error) {
    console.error("Erro ao buscar produtos:", error);
    throw error;
  }
};

export const getProduto = async (idproduto) => {
  try {
    const response = await fetch(`http://localhost:80/produto/${idproduto}`);
    if (!response.ok) {
      throw new Error('Erro ao buscar produto');
    }
    return await response.json();
  } catch (error) {
    console.error("Erro ao buscar produto:", error);
    throw error;
  }
}

export const addProduto = async (produto) => {
  try {
    const response = await fetch(`${baseURL}/produto`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(produto)
    });
    if (!response.ok) {
      throw new Error('Erro ao adicionar produto');
    }
    return await response.json();
  } catch (error) {
    console.error("Erro ao adicionar produto:", error);
    throw error;
  }
};


