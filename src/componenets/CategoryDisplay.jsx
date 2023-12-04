function formatCategoryHeader(categoryName) {
  const words = categoryName.split(" ");
  const formattedWords = words.map(
    (word) => word[0].toUpperCase() + word.slice(1)
  );
  const formattedHeader = formattedWords.join(" ");
  return formattedHeader;
}

function CategoryDisplay({ category }) {
  const formattedHeader = formatCategoryHeader(category);

  return (
    <div className="category-display">
      <img
        className="circle"
        src={`/category-images/${category}.jpg`}
        alt={`${category} image link`}
      />
      <h3>{formattedHeader}</h3>
    </div>
  );
}

export default CategoryDisplay;
