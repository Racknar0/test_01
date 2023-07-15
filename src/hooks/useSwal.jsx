import Swal from 'sweetalert2';

export const useSwal = () => {
    const error = (type, title, text, timer) => {
        Swal.fire({
            position: 'center',
            icon: type,
            title,
            text,
            showConfirmButton: false,
            timer,
        });
    };

    const success = (message) => {
        Swal.fire({
            icon: 'success',
            title: 'Success',
            text: message,
        });
    };

    const confirm = (
        title,
        text,
        type,
        confirmButtonText,
        cancelButtonText
    ) => {
        return Swal.fire({
            title,
            text,
            icon: type,
            showCancelButton: true,
            confirmButtonColor: '#ff0579',
            cancelButtonColor: '#d33',
            confirmButtonText,
            cancelButtonText,
        }).then((result) => {
            if (result.isConfirmed) {
                return true;
            }
        });
    };

    const fire = (alert) => {
        /* remueve el boton de ok y pon timer */
        return Swal.fire({
            title: 'Success',
            text: alert,
            icon: 'success'
        });
    };

    return { error, success, confirm, fire };
};
