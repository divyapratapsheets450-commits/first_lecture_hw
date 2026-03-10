const filteredProducts = useMemo(() => {
  return products.filter((product) => {
    const matchesSearch   = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });
}, [searchQuery, selectedCategory]);