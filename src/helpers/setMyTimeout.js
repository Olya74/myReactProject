
export default function setMyTimeout(callback, duraiton) {
  setTimeout(() => {
    callback();
  }, duraiton);
}