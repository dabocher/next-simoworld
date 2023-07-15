import { Schema, model, models } from "mongoose";

const EventSchema = new Schema({
  id: {
    type: String,
  },
  owner: {
    type: String,
  },
  eventName: {
    type: String,
    required: [true, "Por favor, introduzca un nombre para el evento"],
    minlength: [10, "El nombre del evento debe tener al menos 10 caracteres"],
    maxlength: [50, "El nombre del evento debe tener menos de 50 caracteres"],
  },
  description: {
    type: String,
    required: [true, "Por favor, introduzca una descripción para el evento"],
    minlength: [
      50,
      "La descripción del evento debe tener al menos 50 caracteres",
    ],
    maxlength: [
      500,
      "La descripción del evento debe tener menos de 500 caracteres",
    ],
  },
  eventDay: {
    type: String,
    required: [true, "Por favor, introduzca una fecha para el evento"],
  },
  circuit: {
    type: String,
    required: [true, "Por favor, introduzca un circuito para el evento"],
  },
  carCategory: {
    type: String,
    required: [
      true,
      "Por favor, introduzca una categoría de coche para el evento",
    ],
  },
  car: {
    type: String,
  },
  slots: {
    type: Number,
    required: [
      true,
      "Por favor, introduzca el número de plazas para el evento",
    ],
    min: [1, "El número de plazas debe ser mayor que 0"],
  },
  price: {
    type: Number,
  },
  imageUrl: {
    type: String,
  },
  community: {
    type: String,
    required: [
      true,
      "Por favor, introduzca en que comunidad se celebrará el evento",
    ],
  },
});

const Event = models.Event || model("Event", EventSchema);

export default Event;
