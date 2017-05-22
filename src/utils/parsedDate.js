import { getFullDayOfWeek, getShortMonth } from 'react-toolbox-core';

export default function getDate(date) {
  if (!date) return '-';
  return `${getFullDayOfWeek(date.getDay())}, ${date.getDate()} ${getShortMonth(date)}`;
}
