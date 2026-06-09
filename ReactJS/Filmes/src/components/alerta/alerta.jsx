import Swal from "sweetalert2";
import "./alerta.css";

export const Alerta = ({
    title,
    text,
    icon,
    showCancelButton = false,
    confirmButtonText = "OK",
    cancelButtonText = "Cancelar",
    confirmButtonColor = "#3085d6",
    cancelButtonColor = "#d33",
}) => {

    return Swal.fire({
        title,
        text,
        icon,
        showCancelButton,
        confirmButtonText,
        cancelButtonText,
        confirmButtonColor,
        cancelButtonColor,
    });
};