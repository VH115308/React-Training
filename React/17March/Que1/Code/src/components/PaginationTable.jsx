import { useState } from "react";

function generateItems() {
    const data = [];

    for (let i = 0; i < 100; i++) {
        const row = {};
        for (let col = 1; col <= 10; col++) {
            row[`col${col}`] = `Item ${i + 1} - Col${col}`;
        }
        data.push(row);
    }
    return data;
}

const PaginationTable = () => {
    const items = generateItems();
    const rowsPerPage = 10;
    const totalPages = Math.ceil(items.length / rowsPerPage);//100/10=10

    const [currentPage, setCurrentPage] = useState(1);

    const start = (currentPage - 1) * rowsPerPage;//(1-1)*100 = 0 to 
    const end = start + rowsPerPage;//0+10
    const pageItems = items.slice(start, end);

    const handleJump = (e) => {
        const val = parseInt(e.target.value, 10);
        setCurrentPage(val);
    };

    return (
        <div>
            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            {Array.from({ length: 10 }, (_, i) => (
                                <th key={i}>Col{i + 1}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {pageItems.map((item, idx) => (
                            <tr key={idx}>
                                {Object.values(item).map((val, j) => (
                                    <td key={j}>{val}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="pagination">
                <button
                    onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                    disabled={currentPage === 1}
                >
                    Prev
                </button>

                {Array.from({ length: totalPages }, (_, i) => (
                    <button
                        key={i}//0 index based
                        onClick={() => setCurrentPage(i + 1)}
                        disabled={currentPage === i + 1}//1-index based
                    >
                        {i + 1}
                    </button>
                ))}

                <button
                    onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                    disabled={currentPage === totalPages}
                >
                    Next
                </button>

                <input
                    type="number"
                    min="1"
                    max={totalPages}
                    placeholder="Jump to page"
                    onChange={handleJump}
                />
            </div>
        </div>
    );
};

export default PaginationTable;
