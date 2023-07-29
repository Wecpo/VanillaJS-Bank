const SITE_NAME = 'MAX Bank - Vanilla JS'

export const getTitle = title => {
	return title ? `${title} | ${SITE_NAME}` : SITE_NAME
}
