const shortenText = (text, length) => (text.length > length ? `${text.slice(0, length - 1)}...` : text);
export { shortenText };
