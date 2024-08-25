import { format, parseISO } from 'date-fns';

const convertDate = (dateString) => {
  const date = parseISO(dateString);

  const formattedDate = format(date, 'dd.MM.yyyy');

  return formattedDate;
};

export default convertDate;
