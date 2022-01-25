module.exports = {
    /**
     * Returns back some attributes based on whether the
     * link is active or a parent of an active item
     *
     * @param {String} itemUrl The link in question
     * @param {String} pageUrl The page context
     * @returns {String} The attributes or empty
     */
    isCurrentPage(itemUrl, pageUrl) {
        const splitPageUrl = pageUrl.split('/')
        const splitItemUrl = itemUrl.split('/')
        if (splitPageUrl.length > 0 && splitItemUrl.length > 0) {
            return splitPageUrl[1] === splitItemUrl[1] ? ' active' : ''
        }
        return ''
    }
};
