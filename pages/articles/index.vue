<template>
<!-- This is the list of articles -->
    <div>
            <ArticlesList :articles="articles" />
    </div>
</template>

<script>
export default {
    async asyncData ({$content, params, error}) {
        const articles = await $content('articles')
            .only(['title', 'featured', 'slug', 'summary', 'image'])
            .fetch()
            .catch(() => {
                error({ statusCode: 404, message: 'Page not found' })
            });
        return {
             articles
        }
    }
}
</script>
