<!-- Tools/+layout.svelte -->
<script>
    import { page } from '$app/stores';  
    let url = $page.url.pathname;
    const subject1 = "SQL";
    const subject2 = "Python";
    const subject3 = "Data Science Libraries";
    const subject4 = "Stats";
    const subject5 = "Tableau";
</script>
<div class="post" data-sveltekit-reload>
    <ul class="menu bg-base-200 w-56 rounded-box ml-4">
        <li>
            <h2 class="menu-title">Tools</h2>
            <ul>
                <li>
                    <!-- ADHD quality of life if statement
                    basically if under Fundamentals/data-science
                    parent is open else it is closed -->
                    {#if url.includes(subject1)} 
                        <details open>
                            <summary>SQL</summary>
                            <ul>
                                <li><a href="/Tools/SQL/Intro">Intro to Data Science</a></li>
                                <li><a href="/Tools/SQL/DS-Vocabulary">Data Science Vocabulary</a></li>
                                <li><a href="/Tools/SQL/Pipeline">The Data Science Pipeline</a></li>
                                <li><a href="/Tools/SQL/Pipeline-Demo">Pipeline Demo</a></li>
                                <li><a href="/Tools/SQL/Project">Project</a></li>
                            </ul>
                        </details>
                    {:else}
                    <details>
                        <summary>SQL</summary>
                        <ul>
                            <li><a href="/Tools/SQL/Intro">Intro to Data Science</a></li>
                            <li><a href="/Tools/SQL/DS-Vocabulary">Data Science Vocabulary</a></li>
                            <li><a href="/Tools/SQL/Pipeline">The Data Science Pipeline</a></li>
                            <li><a href="/Tools/SQL/Pipeline-Demo">Pipeline Demo</a></li>
                            <li><a href="/Tools/SQL/Project">Project</a></li>
                        </ul>
                    </details>
                    {/if}  
                </li>
                <li>
                    {#if url.includes(subject2)}
                        <details open>
                            <summary>Python</summary>
                            <ul>
                                <li><a href="/Fundamentals/Command-Line/Cmd-Intro">Intro to Command Line</a></li>
                                <li><a href="/Fundamentals/Command-Line/Nav-File-System">Navigating the File System</a></li>
                                <li><a href="/Fundamentals/Command-Line/Creating-Moving">Creating and Moving</a></li>
                                <li><a href="/Fundamentals/Command-Line/More-Cmd-Line">More Command Line</a></li>
                            </ul>
                        </details>
                    {:else}
                    <details>
                        <summary>Python</summary>
                        <ul>
                            <li><a href="/Fundamentals/Command-Line/Cmd-Intro">Intro to Command Line</a></li>
                            <li><a href="/Fundamentals/Command-Line/Nav-File-System">Navigating the File System</a></li>
                            <li><a href="/Fundamentals/Command-Line/Creating-Moving">Creating and Moving</a></li>
                            <li><a href="/Fundamentals/Command-Line/More-Cmd-Line">More Command Line</a></li>
                        </ul>
                    </details>
                    {/if}
                    </li>
                    <li>
                        {#if url.includes(subject3)} 
                        <details open>
                            <summary>Data Science Libraries</summary>
                            <ul>
                                <li><a href="/Tools/SQL/Intro">Intro to Data Science</a></li>
                                <li><a href="/Tools/SQL/DS-Vocabulary">Data Science Vocabulary</a></li>
                                <li><a href="/Tools/SQL/Pipeline">The Data Science Pipeline</a></li>
                                <li><a href="/Tools/SQL/Pipeline-Demo">Pipeline Demo</a></li>
                                <li><a href="/Tools/SQL/Project">Project</a></li>
                            </ul>
                        </details>
                    {:else}
                    <details>
                        <summary>Data Science Libraries</summary>
                        <ul>
                            <li><a href="/Tools/SQL/Intro">Intro to Data Science</a></li>
                            <li><a href="/Tools/SQL/DS-Vocabulary">Data Science Vocabulary</a></li>
                            <li><a href="/Tools/SQL/Pipeline">The Data Science Pipeline</a></li>
                            <li><a href="/Tools/SQL/Pipeline-Demo">Pipeline Demo</a></li>
                            <li><a href="/Tools/SQL/Project">Project</a></li>
                        </ul>
                    </details>
                    {/if}  
                </li>
                <li>
                    {#if url.includes(subject4)} 
                    <details open>
                        <summary>Stats</summary>
                        <ul>
                            <li><a href="/Tools/SQL/Intro">Intro to Data Science</a></li>
                            <li><a href="/Tools/SQL/DS-Vocabulary">Data Science Vocabulary</a></li>
                            <li><a href="/Tools/SQL/Pipeline">The Data Science Pipeline</a></li>
                            <li><a href="/Tools/SQL/Pipeline-Demo">Pipeline Demo</a></li>
                            <li><a href="/Tools/SQL/Project">Project</a></li>
                        </ul>
                    </details>
                {:else}
                <details>
                    <summary>Stats</summary>
                    <ul>
                        <li><a href="/Tools/SQL/Intro">Intro to Data Science</a></li>
                        <li><a href="/Tools/SQL/DS-Vocabulary">Data Science Vocabulary</a></li>
                        <li><a href="/Tools/SQL/Pipeline">The Data Science Pipeline</a></li>
                        <li><a href="/Tools/SQL/Pipeline-Demo">Pipeline Demo</a></li>
                        <li><a href="/Tools/SQL/Project">Project</a></li>
                    </ul>
                </details>
                {/if}  
                </li>
                <li>
                    {#if url.includes(subject5)} 
                    <details open>
                        <summary>Tableau</summary>
                        <ul>
                            <li><a href="/Tools/SQL/Intro">Intro to Data Science</a></li>
                            <li><a href="/Tools/SQL/DS-Vocabulary">Data Science Vocabulary</a></li>
                            <li><a href="/Tools/SQL/Pipeline">The Data Science Pipeline</a></li>
                            <li><a href="/Tools/SQL/Pipeline-Demo">Pipeline Demo</a></li>
                            <li><a href="/Tools/SQL/Project">Project</a></li>
                        </ul>
                    </details>
                {:else}
                <details>
                    <summary>Tableau</summary>
                    <ul>
                        <li><a href="/Tools/SQL/Intro">Intro to Data Science</a></li>
                        <li><a href="/Tools/SQL/DS-Vocabulary">Data Science Vocabulary</a></li>
                        <li><a href="/Tools/SQL/Pipeline">The Data Science Pipeline</a></li>
                        <li><a href="/Tools/SQL/Pipeline-Demo">Pipeline Demo</a></li>
                        <li><a href="/Tools/SQL/Project">Project</a></li>
                    </ul>
                </details>
                {/if}  
                </li>
            </ul>
        </li>
    </ul>
    <main class="relative mx-5 py-16 px-4 sm:px-6 lg:px-8">
        <slot />
    </main>
</div>