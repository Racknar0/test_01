import Swal from 'sweetalert2';

export const useSwal = () => {
    const error = (type, title, text) => {
        Swal.fire({
            position: 'center',
            icon: type,
            title,
            text,
            showConfirmButton: false,
            timer: 1500,
        });
    };

    const success = (message, timer) => {
        Swal.fire({
            icon: 'success',
            title: 'Success',
            text: message,
            showConfirmButton: false,
            timer: timer || 1500,
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
