<!-- Fundamentals/+layout.svelte -->
<!-- <div class="relative mx-auto max-w-prose overflow-hidden bg-white py-16 px-4 sm:px-6 lg:px-8">
	<slot />
</div> -->
<script>
    import { page } from '$app/stores';  
    let url = $page.url.pathname;
    const dsURL = "Data-Science";
    const cmdURL = "Command-Line";
</script>
<div class="post" data-sveltekit-reload>
    <ul class="menu bg-base-200 w-56 rounded-box ml-4">
        <li>
            <h2 class="menu-title">Fundamentals</h2>
            <ul>
                <li><a href="/Fundamentals/Enviroment">Enviroment Setup</a></li>
                <li>
                    <!-- ADHD quality of life if statement
                    basically if under Fundamentals/data-science
                    parent is open else it is closed -->
                    {#if url.includes(dsURL)} 
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
                    {:else}
                        <details>
                            <summary>Data Science</summary>
                            <ul>
                                <li><a href="/Fundamentals/Data-Science/Intro">Intro to Data Science</a></li>
                                <li><a href="/Fundamentals/Data-Science/DS-Vocabulary">Data Science Vocabulary</a></li>
                                <li><a href="/Fundamentals/Data-Science/Pipeline">The Data Science Pipeline</a></li>
                                <li><a href="/Fundamentals/Data-Science/Pipeline-Demo">Pipeline Demo</a></li>
                                <li><a href="/Fundamentals/Data-Science/Project">Project</a></li>
                            </ul>
                        </details>
                    {/if}  
                </li>
                <li>
                    {#if url.includes(cmdURL)}
                        <details open>
                            <summary>Command Line</summary>
                            <ul>
                                <li><a href="/Fundamentals/Command-Line/Cmd-Intro">Intro to Command Line</a></li>
                                <li><a href="/Fundamentals/Command-Line/Nav-File-System">Navigating the File System</a></li>
                                <li><a href="/Fundamentals/Command-Line/Creating-Moving">Creating and Moving</a></li>
                                <li><a href="/Fundamentals/Command-Line/More-Cmd-Line">More Command Line</a></li>
                            </ul>
                        </details>
                    {:else}
                    <details>
                        <summary>Command Line</summary>
                        <ul>
                            <li><a href="/Fundamentals/Command-Line/Cmd-Intro">Intro to Command Line</a></li>
                            <li><a href="/Fundamentals/Command-Line/Nav-File-System">Navigating the File System</a></li>
                            <li><a href="/Fundamentals/Command-Line/Creating-Moving">Creating and Moving</a></li>
                            <li><a href="/Fundamentals/Command-Line/More-Cmd-Line">More Command Line</a></li>
                        </ul>
                    </details>
                    {/if}
                    </li>

                <li><a href="/Fundamentals/Git">Git</a></li>
            </ul>
        </li>
    </ul>
    <main class="relative mx-5 py-16 px-4 sm:px-6 lg:px-8">
        <slot />
    </main>
</div>