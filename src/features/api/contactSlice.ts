import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { RootState } from "../../store";

// Define a type for the slice state
interface ContactState {
  loading: boolean;
  error: string;
  sent: boolean;
}

// Define the initial state using that type
const initialState: ContactState = {
  loading: false,
  error: "",
  sent: false,
};

export const contactSlice = createSlice({
  name: "contact",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(sendContact.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(sendContact.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.sent = true;
    });
    builder.addCase(sendContact.rejected, (state, { payload }) => {
      state.loading = false;
      state.sent = true;
      state.error = "Hubo un error al mandar el mensaje";
    });
  },
});

export const sendContact = createAsyncThunk<
  any,
  { name: string; mail: string; msg: string },
  { rejectValue: unknown }
>("contact", async ({ name, mail, msg }) => {
  // Datos del formulario
  const formData = new FormData();
  formData.append("_wpcf7", "49");
  formData.append("_wpcf7_version", "5.8.4");
  formData.append("_wpcf7_locale", "en_US");
  formData.append("_wpcf7_unit_tag", "wpcf7-f49-p51-o1");
  formData.append("_wpcf7_container_post", "51");
  formData.append("_wpcf7_posted_data_hash", "");
  formData.append("your-name", name);
  formData.append("your-email", mail);
  formData.append("your-subject", "Contacto");
  formData.append("your-message", msg);

  // Configuración de la solicitud
  const url =
    "https://fortalecimiento.org/wp/wp-json/contact-form-7/v1/contact-forms/49/feedback";
  const headers = {
    accept: "application/json, */*;q=0.1",
    "accept-language": "en,es-419;q=0.9,es;q=0.8,de;q=0.7",
    "content-type":
      "multipart/form-data; boundary=----WebKitFormBoundaryQxwYCrcqw8Zzu7Ag",
    "sec-ch-ua":
      '"Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": '"macOS"',
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    // Puedes agregar más encabezados según sea necesario
  };

  // Construir el cuerpo de la solicitud
  const body =
    Array.from(formData.entries()).reduce((accumulator, [key, value]) => {
      return (
        accumulator +
        `------WebKitFormBoundaryQxwYCrcqw8Zzu7Ag\r\nContent-Disposition: form-data; name="${key}"\r\n\r\n${value}\r\n`
      );
    }, "") + "------WebKitFormBoundaryQxwYCrcqw8Zzu7Ag--\r\n";

  // Configuración de la solicitud con el método POST
  const requestOptions = {
    method: "POST",
    mode: "cors",
    credentials: "include",
    headers: headers,
    referrer: "https://fortalecimiento.org/wp/contact/",
    referrerPolicy: "strict-origin-when-cross-origin",
    body: body,
  };

  const response = fetch(url, requestOptions);
  const data = await response.json();
  return data;
});

//export const {  } = contactSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectSending = (state: RootState) => state.contact.loading;
export const selectSent = (state: RootState) => state.contact.sent;

export default contactSlice.reducer;
