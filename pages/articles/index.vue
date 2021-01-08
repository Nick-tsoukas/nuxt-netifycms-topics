<template>
<!-- This is the list of articles -->
    <div>
        <!-- <pre>
            {{ articles }}
        </pre> -->

            <ArticlesList :articles="articles" />
    </div>
</template>

<script>
export default {
    async asyncData ({$content, params, error}) {
        const articles = await $content('articles')
            .only(['title', 'featured', 'slug', 'summary'])
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
