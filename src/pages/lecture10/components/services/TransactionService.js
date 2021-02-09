const GRAPH_TYPES = {
    LINE: 'line',
    SCATTER: 'scatter',
    BAR: 'bar',
    PIE: 'pie',
    TREEMAP: 'treemap'
}

const TransactionService = transactions => {

    const totalSalesOverCategory = () => {
        const groups = transactions.reduce((accumulator, next) => {
            const group = next.category
            return accumulator.includes(group) ? accumulator : [...accumulator, group]
        }, [])
        const grouped = groups.map(group => {
            const items = transactions.filter(next => next.category === group)
            const sum = items.reduce((sum, next) => sum + (next.price * next.quantity), 0)
            return {
                name: group,
                value: sum
            }
        })
        return {
            xAxis: {
                type: 'category',
                data: grouped.map(next => next.name)
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: grouped.map(next => next.value),
                type: 'line'
            }]
        }
    }


    const totalSalesOverSubCategories = () => {
        const groups = transactions.reduce((accumulator, next) => {
            const group = next.subCategory
            return accumulator.includes(group) ? accumulator : [...accumulator, group]
        }, [])
        const grouped = groups.map(group => {
            const items = transactions.filter(next => next.subCategory === group)
            const sum = items.reduce((sum, next) => sum + (next.price * next.quantity), 0)
            return {
                name: group,
                value: sum
            }
        })
        return {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    data: grouped.map(next => next.name),
                    axisTick: {
                        alignWithLabel: true
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: [
                {
                    type: 'bar',
                    barWidth: '60%',
                    data: grouped.map(next => next.value)
                }
            ]
        };
    }

    const totalSalesOverProducts = () => {
        const groups = transactions.reduce((accumulator, next) => {
            const group = next.product
            return accumulator.includes(group) ? accumulator : [...accumulator, group]
        }, [])
        const grouped = groups.map(group => {
            const items = transactions.filter(next => next.product === group)
            const sum = items.reduce((sum, next) => sum + (next.price * next.quantity), 0)
            return {
                name: group,
                value: sum
            }
        })
        return {
            series: [
                {
                    data: grouped,
                    type: GRAPH_TYPES.PIE
                }
            ]
        }
    }

    const topFiveSoldProducts = () => {
        const groups = transactions.reduce((accumulator, next) => {
            const group = next.product
            return accumulator.includes(group) ? accumulator : [...accumulator, group]
        }, [])
        const grouped = groups.map(group => {
            const items = transactions.filter(next => next.product === group)
            const sum = items.reduce((sum, next) => sum + next.quantity, 0)
            return {
                name: group,
                value: sum
            }
        })
        return {
            name: 'Tree',
            series: [
                {
                    data: grouped.sort((a, b) => b.value - a.value).slice(0, 5),
                    type: GRAPH_TYPES.TREEMAP
                }
            ]
        }
    }

    const topFiveSoldOverCategories = () => {
        const groups = transactions.reduce((accumulator, next) => {
            const group = next.category
            return accumulator.includes(group) ? accumulator : [...accumulator, group]
        }, [])
        const grouped = groups.map(group => {
            const items = transactions.filter(next => next.category === group)
            const sum = items.reduce((sum, next) => sum + (next.quantity * next.price), 0)
            return {
                name: group,
                value: sum
            }
        })
        return {
            name: 'Tree',
            series: [
                {
                    data: grouped.sort((a, b) => b.value - a.value).slice(0, 5),
                    type: GRAPH_TYPES.TREEMAP
                }
            ]
        }
    }

    const averageQuantityBetweenCategories = () => {
        const groups = transactions.reduce((accumulator, next) => {
            const group = next.category
            return accumulator.includes(group) ? accumulator : [...accumulator, group]
        }, [])
        const grouped = groups.map(group => {
            const items = transactions.filter(next => next.category === group)
            const length = items.length || Infinity
            const average = items.reduce((sum, next) => sum + next.quantity, 0) / length
            return {
                name: group,
                value: average.toFixed(2)
            }
        })
        return {
            series: [
                {
                    data: grouped,
                    type: GRAPH_TYPES.PIE
                }
            ]
        }
    }

    return {
        totalSalesOverCategory,
        totalSalesOverSubCategories,
        totalSalesOverProducts,
        topFiveSoldOverCategories,
        topFiveSoldProducts,
        averageQuantityBetweenCategories
    }
}

export default TransactionService