export const dataGridClassNames =
  "border border-gray-200 bg-white shadow dark:border-stroke-dark dark:bg-dark-secondary dark:text-gray-200";

export const dataGridSxStyles = (isDarkMode: boolean) => {
  return {
    "& .MuiDataGrid-columnHeaders": {
      color: `${isDarkMode ? "#e5e7eb" : ""}`, // Column header text color
      '& [role="row"] > *': {
        backgroundColor: `${isDarkMode ? "#1d1f21" : "white"}`, // Background color
        borderColor: `${isDarkMode ? "#2d3135" : ""}`, // Border color
        color: `${isDarkMode ? "#e5e7eb" : ""}`, // **Ensure the cell text color is set**
      },
    },
    "& .MuiIconbutton-root": {
      color: `${isDarkMode ? "#a3a3a3" : ""}`, // Icon button color
    },
    "& .MuiTablePagination-root": {
      color: `${isDarkMode ? "#a3a3a3" : ""}`, // Pagination color
    },
    "& .MuiTablePagination-selectIcon": {
      color: `${isDarkMode ? "#a3a3a3" : ""}`, // Pagination select icon color
    },
    "& .MuiDataGrid-cell": {
      border: "none", // Remove border from cells
      color: `${isDarkMode ? "#e5e7eb" : "#000000"}`, // **Ensure the cell text color changes based on mode**
    },
    "& .MuiDataGrid-row": {
      borderBottom: `1px solid ${isDarkMode ? "#2d3135" : "e5e7eb"}`, // Row border color
    },
    "& .MuiDataGrid-withBorderColor": {
      borderColor: `${isDarkMode ? "#2d3135" : "e5e7eb"}`, // Border color
    },
  };
};
