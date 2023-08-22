
function HandlePrice(value) {
    const VND = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
      });
    value = VND.format(value)
    return value
}

export {HandlePrice}

