import { toast } from 'react-hot-toast';

export const errorNotify = mes => {
  return toast.error(`${mes}`, {
    style: {
      width: '400px',
      height: '50px',
      borderRadius: '10px',
      fontSize: '20px',
    },
  });
};

export const successNotify = mes => {
  return toast.success(`${mes}`, {
    style: {
      width: '300px',
      height: '50px',
      borderRadius: '10px',
      fontSize: '20px',
    },
  });
};
