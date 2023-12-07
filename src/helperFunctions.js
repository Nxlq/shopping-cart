export function formatCategoryHeader(categoryName) {
    const words = categoryName.split(" ");
    const formattedWords = words.map(
      (word) => word[0].toUpperCase() + word.slice(1)
    );
    const formattedHeader = formattedWords.join(" ");
    return formattedHeader;
  }