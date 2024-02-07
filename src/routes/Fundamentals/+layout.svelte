<!-- Fundamentals/+layout.svelte -->
<!-- <div class="relative mx-auto max-w-prose overflow-hidden bg-white py-16 px-4 sm:px-6 lg:px-8">
	<slot />
</div> -->
<div class="post" data-sveltekit-reload>
    <ul class="menu bg-base-200 w-56 rounded-box ml-4">
        <li>
            <h2 class="menu-title">Fundamentals</h2>
            <ul>
                <li><a href="/Fundamentals/Enviroment">Enviroment Setup</a></li>
                <li>
                    <details open>
                        <summary>Data Science</summary>
                        <ul>
                            <li><a href="/Fundamentals/Data-Science/Intro">Intro to Data Science</a></li>
                            <li><a href="/Fundamentals/Data-Science/DS-Vocabulary">Data Science Vocabulary</a></li>
                            <li><a href="/Fundamentals/Data-Science/Pipeline">The Data Science Pipeline</a></li>
                            <li><a href="/Fundamentals/Data-Science/Pipeline-Demo">Pipeline Demo</a></li>
                            <li><a href="/Fundamentals/Data-Science/Project">Project</a></li>
                        </ul>
                    </details>
                </li>
                <li><a href="/Fundamentals/Git">Git</a></li>
            </ul>
        </li>
    </ul>
    <main class="relative mx-5 py-16 px-4 sm:px-6 lg:px-8">
        <slot />
    </main>
</div>