import axios from "axios";

const troquelApi = axios.create({
  baseURL: "/api"
});

export async function createPedido(
  servicio,
  descripcion,
  estado,
  link_imagen,
  cliente_id,
  usuario_id,
  ticket_id,
  joya,
  material_adjunto,
  material_utilizar,
  presupuesto
) {
  return await troquelApi.post("pedido", {
    servicio: servicio,
    descripcion: descripcion,
    estado: estado,
    link_imagen: link_imagen,
    cliente_id: cliente_id,
    usuario_id: usuario_id,
    ticket_id: ticket_id,
    joya: joya,
    material_adjunto: material_adjunto,
    material_utilizar: material_utilizar,
    presupuesto: presupuesto
  });
}

export async function getAllPedidos() {
  return await troquelApi.get("pedido");
}

export async function getPedidoById(id) {
  return await troquelApi.get("pedido/" + id);
}

export async function getPedidoByFolio(folio) {
  return await troquelApi.get("pedido/search", {
    params: {
      folio: folio
    }
  });
}

export async function updatePedido(
  id,
  servicio,
  descripcion,
  estado,
  link_imagen,
  cliente_id,
  usuario_id,
  ticket_id,
  joya,
  material_adjunto,
  material_utilizar,
  presupuesto
) {
  return await troquelApi.put("pedido/" + id, {
    servicio: servicio,
    descripcion: descripcion,
    estado: estado,
    link_imagen: link_imagen,
    cliente_id: cliente_id,
    usuario_id: usuario_id,
    ticket_id: ticket_id,
    joya: joya,
    material_adjunto: material_adjunto,
    material_utilizar: material_utilizar,
    presupuesto: presupuesto
  });
}

//Client Info

export async function createClient(
  nombre,
  apellido_materno,
  apellido_paterno,
  correo,
  telefono
) {
  return await troquelApi.post("cliente", {
    nombre: nombre,
    apellido_materno: apellido_materno,
    apellido_paterno: apellido_paterno,
    correo: correo,
    telefono: parseInt(telefono)
  });
}

export async function getAllClients() {
  return await troquelApi.get("cliente");
}

export async function getClientById(id) {
  return await troquelApi.get("cliente/" + id);
}

//Image uploader

export async function uploadImage(image) {
  const formData = new FormData();
  formData.append("photo", image[0]);
  const config = {
    headers: {
      "content-type": "multipart/form-data"
    }
  };
  return await troquelApi.post("image", formData, config);
}
