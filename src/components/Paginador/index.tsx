"use client"


import "./styles.css"

type Props = {
    page: number,
    totalPages: number,
    setPage: (page: number) => void
}

const Paginador = ({ page, totalPages, setPage }: Props) => {

    const getPages = (): number[] => {
        const first = [1, 2, 3]
        const last = [totalPages - 2, totalPages - 1, totalPages]
        const current = [page]

        const all = [...new Set([...first, ...current, ...last])]
            .filter(p => p >= 1 && p <= totalPages)
            .sort((a, b) => a - b)

        return all
    }

    const pages = getPages()

    return (
        <div className="containerPaginador">
            <button
                onClick={() => setPage(page - 1)}
                disabled={page === 1}
            >
                {"<"}
            </button>

            {pages.map((p, index) => {
                const prev = pages[index - 1]
                const showDots = prev && p - prev > 1

                return (
                    <span key={p}>
                        {showDots && <span className="dots">...</span>}
                        <button
                            onClick={() => setPage(p)}
                            className={p === page ? "pageActive" : ""}
                        >
                            {p}
                        </button>
                    </span>
                )
            })}

            <button
                onClick={() => setPage(page + 1)}
                disabled={page === totalPages}
            >
                {">"}
            </button>
        </div>
    )
}

export default Paginador