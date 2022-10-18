function goTo(xy, height) {
    window.scrollTo({ top: xy - height, behavior: "smooth" });
}
export default goTo;
