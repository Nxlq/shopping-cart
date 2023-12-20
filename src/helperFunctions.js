export function formatCategoryHeader(categoryName) {
  const words = categoryName.split(" ");
  const formattedWords = words.map(
    (word) => word[0].toUpperCase() + word.slice(1)
  );
  const formattedHeader = formattedWords.join(" ");
  return formattedHeader;
}

export function formatNameForSEO(name) {
  const removedSlashes = name.replaceAll("/", "-per-");
  const formattedName = removedSlashes.replaceAll(" ", "-");

  return formattedName;
}

export function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
