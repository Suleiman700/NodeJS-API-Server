<hr class="divider">

<!-- Layout
============================ -->
<section id="naming_variable">
    <h2>Variable Naming</h2>
    <p>A brief overview about the different case styles:</p>
    <ul>
        <li>camelCase - <strong>chosen</strong></li>
        <li>PascalCase</li>
        <li>snake_case</li>
        <li>kebab-case</li>
    </ul>

    <hr />

    <p><strong>A JavaScript variable should be self-descriptive.</strong> It shouldn't be necessary to add a comment for additional documentation to the variable:</p>
    <pre><code class="language-javascript">
        // bad
        var value = 'Robin';

        // bad
        var val = 'Robin';

        // good
        var firstName = 'Robin';
    </code></pre>

    <p>Most often you will find JavaScript variables declared with a camelCase variable name with a leading lowercase character:</p>
    <pre><code class="language-javascript">
        // bad
        var firstname = 'Robin';

        // bad
        var first_name = 'Robin';

        // bad
        var FIRSTNAME = 'Robin';

        // bad
        var FIRST_NAME = 'Robin';

        // good
        var firstName = 'Robin';
    </code></pre>
</section>

<hr />

<section id="naming_boolean">
    <h2>Boolean Naming</h2>
    <p>A brief overview about the different case styles:</p>
    <ul>
        <li>camelCase - <strong>chosen</strong></li>
        <li>PascalCase </li>
        <li>snake_case</li>
    </ul>

    <hr />

    <p>A prefix like <strong>is, are, or has</strong> helps every JavaScript developer to distinguish a boolean from another variable by just looking at it:</p>

    <pre><code class="language-javascript">
        // bad
        var visible = true;

        // good
        var isVisible = true;

        // bad
        var equal = false;

        // good
        var areEqual = false;

        // bad
        var encryption = true;

        // good
        var hasEncryption = true;
    </code></pre>
</section>

<hr />

<section id="naming_function">
    <h2>Function Naming</h2>
    <p>A brief overview about the different case styles:</p>
    <ul>
        <li>camelCase - <strong>chosen</strong></li>
        <li>PascalCase </li>
        <li>snake_case</li>
    </ul>

    <hr />

    <p>JavaScript functions are written in camel case too. In addition, it's a best practice to actually tell what the function is doing by giving the function name a verb as prefix.</p>

    <pre><code class="language-javascript">
        // bad
        function name(firstName, lastName) {
          return `${firstName} ${lastName}`;
        }

        // bad
        function get_name(firstName, lastName) {
          return `${firstName} ${lastName}`;
        }

        // bad
        function getname(firstName, lastName) {
          return `${firstName} ${lastName}`;
        }

        // good
        function getName(firstName, lastName) {
          return `${firstName} ${lastName}`;
        }
    </code></pre>
</section>

<hr />

<section id="naming_class">
    <h2>Class Naming</h2>
    <p>A brief overview about the different case styles:</p>
    <ul>
        <li>camelCase</li>
        <li>PascalCase - <strong>chosen</strong></li>
        <li>snake_case</li>
    </ul>

    <hr />

    <p>A JavaScript class is declared with a <strong>PascalCase</strong> in contrast to other JavaScript data structures:</p>

    <pre><code class="language-javascript">
        class SoftwareDeveloper {
            constructor(firstName, lastName) {
                this.firstName = firstName;
                this.lastName = lastName;
            }
        }

        var me = new SoftwareDeveloper('Robin', 'Wieruch');
    </code></pre>

    <p>Every time a JavaScript constructor is called to instantiate a new instance of a class, the name of the class should appear in <strong>PascalCase</strong>, because the class has been declared with <strong>PascalCase</strong> in the first place.</p>
</section>

<hr />

<section id="naming_method">
    <h2>Method Naming</h2>
    <p>A brief overview about the different case styles:</p>
    <ul>
        <li>camelCase - <strong>chosen</strong></li>
        <li>PascalCase</li>
        <li>snake_case</li>
    </ul>

    <hr />

    <p>Identical to JavaScript functions, a method on a JavaScript class is declared with <strong>camelCase</strong>:</p>

    <pre><code class="language-javascript">
        class SoftwareDeveloper {
            constructor(firstName, lastName) {
                this.firstName = firstName;
                this.lastName = lastName;
            }

            <span class="d-block" style="background: wheat;">
            getName() {
                return `${this.firstName} ${this.lastName}`;
            }
            </span>

        }

        var me = new SoftwareDeveloper('Robin', 'Wieruch');

        <span style="display: inline; background: wheat;">console.log(me.getName());</span>
    </code></pre>
</section>

<hr />

<section id="naming_component">
    <h2>Component Naming</h2>
    <p>A brief overview about the different case styles:</p>
    <ul>
        <li>camelCase</li>
        <li>PascalCase - <strong>chosen</strong></li>
        <li>snake_case</li>
    </ul>

    <hr />

    <p>Components are not everywhere in JavaScript, but commonly found in frontend frameworks like React. Since a component is kinda instantiated -- but appended to the DOM instead -- like a JavaScript class, they are widely declared with <strong>PascalCase</strong> too.</p>

    <pre><code class="language-javascript">
            // bad
            function userProfile(user) {
              return (
                < div>
                  < span>First Name: {user.firstName}< /span>
                  < span>Last Name: {user.lastName}< /span>
                < /div>
              );
            }

            // good
            function UserProfile(user) {
              return (
                < div>
                  < span>First Name: {user.firstName}< /span>
                  < span>Last Name: {user.lastName}< /span>
                < /div >
              );
            }
    </code></pre>

</section>

<hr />

<section id="naming_constant">
    <h2>Constant Naming</h2>
    <p>A brief overview about the different case styles:</p>
    <ul>
        <li>UPPERCASE - <strong>chosen</strong></li>
        <li>camelCase</li>
        <li>PascalCase</li>
        <li>snake_case</li>
    </ul>

    <hr />

    <p>Constants in JavaScript are written in capital letters <strong>(UPPERCASE)</strong>:</p>

    <pre><code class="language-javascript">
            const SECONDS = 60;
            const MINUTES = 60;
            const HOURS = 24;

            const DAY = SECONDS * MINUTES * HOURS;
    </code></pre>

    <p>If a variable has more than one word in its variable declaration name, it makes use of an underscore (<strong>_</strong>):</p>

    <pre><code class="language-javascript">
            const DAYS_UNTIL_TOMORROW = 1;
    </code></pre>

</section>

<hr />

<section id="naming_global_variable">
    <h2>Global Variable Naming</h2>

    <p>A JavaScript variable is globally defined, if all its context has access to it. Often the context is defined by the JavaScript file where the variable is declared/defined in, but in smaller JavaScript projects it may be the entire project. There are no special naming conventions for global JavaScript variables.</p>

    <ul>
        <li>A global JavaScript variable is written in camelCase if it is mutable.</li>
        <li>A global JavaScript variable is written in UPPERCASE if it is immutable</li>
    </ul>
</section>

<hr />

<section id="naming_object">
    <h2>Object Naming</h2>
    <p>A brief overview about the different case styles:</p>
    <ul>
        <li>camelCase - <strong>chosen</strong></li>
        <li>PascalCase</li>
        <li>snake_case</li>
    </ul>

    <hr />

    <p>For objects names and keys we'll be using <strong>camelCase</strong>:</p>

    <pre><code class="language-javascript">
            // bad
            const person_details = {
              'first-name': 'Robin',
              'last-name': 'Wieruch',
            };
            const firstName = person_details['first-name'];

            // good
            const personDetails = {
              firstName: 'Robin',
              lastName: 'Wieruch',
            };
            const firstName = personDetails.firstName;
    </code></pre>
</section>

<hr />

<section id="naming_files">
    <h2>Files Naming</h2>
    <p>A brief overview about the different case styles:</p>
    <ul>
        <li>camelCase</li>
        <li>PascalCase  - <strong>chosen for frontend</strong></li>
        <li>snake_case</li>
        <li>kebab-case - <strong>chosen for backend</strong></li>
    </ul>

    <hr />

    <p>There are two strategies of naming files in JavaScript: PascalCase and kebab-case. In JavaScript frontend applications, We will use <strong>PascalCase</strong> for naming files.</p>
    <pre><code class="language-javascript">
            - components/
            --- user/
            ----- UserProfile.js
            ----- UserList.js
            ----- UserItem.js
            --- ui/
            ----- Dialog.js
            ----- Dropdown.js
            ----- Table.js
    </code></pre>

    <p>In JavaScript backend application, <strong>kebab-case</strong> is the common sense:</p>
    <pre><code class="language-javascript">
            - routing/
            --- user-route.js
            --- messages-route.js
    </code></pre>

</section>
