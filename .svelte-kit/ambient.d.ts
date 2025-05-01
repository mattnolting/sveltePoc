
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const npm_package_devDependencies_stylelint_config_recess_order: string;
	export const NVM_INC: string;
	export const npm_package_devDependencies__eslint_compat: string;
	export const npm_package_devDependencies_prettier: string;
	export const npm_package_devDependencies_stylelint_config_recommended: string;
	export const COREPACK_ROOT: string;
	export const npm_package_devDependencies_eslint_plugin_svelte: string;
	export const npm_package_devDependencies_typescript_eslint: string;
	export const TERM_PROGRAM: string;
	export const NODE: string;
	export const npm_config_version_git_tag: string;
	export const npm_package_devDependencies_prettier_plugin_svelte: string;
	export const npm_package_devDependencies_typescript: string;
	export const NVM_CD_FLAGS: string;
	export const _P9K_TTY: string;
	export const INIT_CWD: string;
	export const npm_package_devDependencies_vite: string;
	export const TERM: string;
	export const SHELL: string;
	export const HOMEBREW_REPOSITORY: string;
	export const TMPDIR: string;
	export const npm_config_email: string;
	export const npm_config_init_license: string;
	export const npm_package_scripts_lint: string;
	export const npm_package_scripts_prepack: string;
	export const TERM_PROGRAM_VERSION: string;
	export const npm_package_scripts_dev: string;
	export const npm_package_scripts_dev_old: string;
	export const npm_package_devDependencies_stylelint_order: string;
	export const TERM_SESSION_ID: string;
	export const npm_config_registry: string;
	export const npm_package_exports___svelte: string;
	export const npm_package_devDependencies__sveltejs_kit: string;
	export const npm_package_devDependencies_stylelint_config_standard: string;
	export const PNPM_HOME: string;
	export const ZSH: string;
	export const npm_config_local_prefix: string;
	export const npm_package_devDependencies_globals: string;
	export const npm_package_readmeFilename: string;
	export const npm_package_description: string;
	export const NVM_DIR: string;
	export const USER: string;
	export const npm_package_scripts_check_watch: string;
	export const npm_package_devDependencies__eslint_js: string;
	export const npm_package_license: string;
	export const LS_COLORS: string;
	export const npm_package_devDependencies_mdsvex: string;
	export const COMMAND_MODE: string;
	export const npm_package_devDependencies__sveltejs_adapter_static: string;
	export const npm_package_scripts_buildold: string;
	export const npm_package_devDependencies_case_anything: string;
	export const npm_package_scripts_lint_sass_fix: string;
	export const npm_package_scripts_lint_sass: string;
	export const SSH_AUTH_SOCK: string;
	export const npm_package_devDependencies_eslint: string;
	export const __CF_USER_TEXT_ENCODING: string;
	export const npm_package_devDependencies_vite_plugin_markdown: string;
	export const npm_execpath: string;
	export const TERM_FEATURES: string;
	export const npm_package_devDependencies_svelte: string;
	export const PAGER: string;
	export const npm_package_devDependencies_stylelint_use_logical_spec: string;
	export const LSCOLORS: string;
	export const npm_package_scripts_dev_base: string;
	export const npm_config_argv: string;
	export const TERMINFO_DIRS: string;
	export const PATH: string;
	export const npm_package_devDependencies__sveltejs_adapter_node: string;
	export const npm_package_dependencies_rollup: string;
	export const _: string;
	export const LaunchInstanceID: string;
	export const npm_package_json: string;
	export const npm_package_devDependencies_handlebars: string;
	export const npm_package_dependencies__starptech_prettyhtml: string;
	export const COREPACK_ENABLE_DOWNLOAD_PROMPT: string;
	export const __CFBundleIdentifier: string;
	export const PWD: string;
	export const npm_package_scripts_preview: string;
	export const npm_package_devDependencies__sveltejs_package: string;
	export const npm_package_devDependencies_publint: string;
	export const npm_lifecycle_event: string;
	export const P9K_SSH: string;
	export const npm_package_name: string;
	export const npm_package_svelte: string;
	export const npm_package_types: string;
	export const npm_package_devDependencies__sveltejs_vite_plugin_svelte: string;
	export const npm_package_devDependencies_marked: string;
	export const npm_package_packageManager: string;
	export const P9K_TTY: string;
	export const LANG: string;
	export const npm_package_devDependencies_stylelint_config_prettier: string;
	export const ITERM_PROFILE: string;
	export const npm_config_version_commit_hooks: string;
	export const npm_package_scripts_dev_figma: string;
	export const npm_package_scripts_build: string;
	export const npm_package_exports___types: string;
	export const npm_package_devDependencies_sass: string;
	export const npm_package_devDependencies_stylelint_config_standard_scss: string;
	export const npm_config_username: string;
	export const XPC_FLAGS: string;
	export const npm_config_bin_links: string;
	export const npm_package_devDependencies_stylelint: string;
	export const npm_package_dependencies_path: string;
	export const npm_package_devDependencies_eslint_config_prettier: string;
	export const npm_package_version: string;
	export const npm_package_devDependencies_vite_plugin_handlebars: string;
	export const XPC_SERVICE_NAME: string;
	export const npm_package_devDependencies_svelte_check: string;
	export const npm_package_type: string;
	export const SHLVL: string;
	export const HOME: string;
	export const COLORFGBG: string;
	export const npm_package_prepare: string;
	export const npm_config_strict_ssl: string;
	export const npm_config_save_prefix: string;
	export const LC_TERMINAL_VERSION: string;
	export const npm_config_version_git_message: string;
	export const HOMEBREW_PREFIX: string;
	export const npm_package_scripts_lint_js: string;
	export const ITERM_SESSION_ID: string;
	export const npm_package_scripts_format: string;
	export const YARN_WRAP_OUTPUT: string;
	export const LESS: string;
	export const LOGNAME: string;
	export const npm_package_peerDependencies_svelte: string;
	export const npm_lifecycle_script: string;
	export const RHPC_CODE_ROOT: string;
	export const npm_package_devDependencies__types_glob: string;
	export const BUN_INSTALL: string;
	export const NVM_BIN: string;
	export const npm_config_user_agent: string;
	export const npm_config_ignore_scripts: string;
	export const npm_config_version_git_sign: string;
	export const npm_package_files_2: string;
	export const npm_package_devDependencies__types_node: string;
	export const INFOPATH: string;
	export const HOMEBREW_CELLAR: string;
	export const npm_package_files_1: string;
	export const _P9K_SSH_TTY: string;
	export const LC_TERMINAL: string;
	export const npm_package_files_0: string;
	export const npm_config_ignore_optional: string;
	export const npm_config_init_version: string;
	export const SECURITYSESSIONID: string;
	export const npm_package_scripts_check: string;
	export const npm_config_version_tag_prefix: string;
	export const npm_package_sideEffects_0: string;
	export const npm_node_execpath: string;
	export const COLORTERM: string;
	export const NODE_ENV: string;
}

/**
 * Similar to [`$env/static/private`](https://svelte.dev/docs/kit/$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/main/packages/adapter-node) (or running [`vite preview`](https://svelte.dev/docs/kit/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		npm_package_devDependencies_stylelint_config_recess_order: string;
		NVM_INC: string;
		npm_package_devDependencies__eslint_compat: string;
		npm_package_devDependencies_prettier: string;
		npm_package_devDependencies_stylelint_config_recommended: string;
		COREPACK_ROOT: string;
		npm_package_devDependencies_eslint_plugin_svelte: string;
		npm_package_devDependencies_typescript_eslint: string;
		TERM_PROGRAM: string;
		NODE: string;
		npm_config_version_git_tag: string;
		npm_package_devDependencies_prettier_plugin_svelte: string;
		npm_package_devDependencies_typescript: string;
		NVM_CD_FLAGS: string;
		_P9K_TTY: string;
		INIT_CWD: string;
		npm_package_devDependencies_vite: string;
		TERM: string;
		SHELL: string;
		HOMEBREW_REPOSITORY: string;
		TMPDIR: string;
		npm_config_email: string;
		npm_config_init_license: string;
		npm_package_scripts_lint: string;
		npm_package_scripts_prepack: string;
		TERM_PROGRAM_VERSION: string;
		npm_package_scripts_dev: string;
		npm_package_scripts_dev_old: string;
		npm_package_devDependencies_stylelint_order: string;
		TERM_SESSION_ID: string;
		npm_config_registry: string;
		npm_package_exports___svelte: string;
		npm_package_devDependencies__sveltejs_kit: string;
		npm_package_devDependencies_stylelint_config_standard: string;
		PNPM_HOME: string;
		ZSH: string;
		npm_config_local_prefix: string;
		npm_package_devDependencies_globals: string;
		npm_package_readmeFilename: string;
		npm_package_description: string;
		NVM_DIR: string;
		USER: string;
		npm_package_scripts_check_watch: string;
		npm_package_devDependencies__eslint_js: string;
		npm_package_license: string;
		LS_COLORS: string;
		npm_package_devDependencies_mdsvex: string;
		COMMAND_MODE: string;
		npm_package_devDependencies__sveltejs_adapter_static: string;
		npm_package_scripts_buildold: string;
		npm_package_devDependencies_case_anything: string;
		npm_package_scripts_lint_sass_fix: string;
		npm_package_scripts_lint_sass: string;
		SSH_AUTH_SOCK: string;
		npm_package_devDependencies_eslint: string;
		__CF_USER_TEXT_ENCODING: string;
		npm_package_devDependencies_vite_plugin_markdown: string;
		npm_execpath: string;
		TERM_FEATURES: string;
		npm_package_devDependencies_svelte: string;
		PAGER: string;
		npm_package_devDependencies_stylelint_use_logical_spec: string;
		LSCOLORS: string;
		npm_package_scripts_dev_base: string;
		npm_config_argv: string;
		TERMINFO_DIRS: string;
		PATH: string;
		npm_package_devDependencies__sveltejs_adapter_node: string;
		npm_package_dependencies_rollup: string;
		_: string;
		LaunchInstanceID: string;
		npm_package_json: string;
		npm_package_devDependencies_handlebars: string;
		npm_package_dependencies__starptech_prettyhtml: string;
		COREPACK_ENABLE_DOWNLOAD_PROMPT: string;
		__CFBundleIdentifier: string;
		PWD: string;
		npm_package_scripts_preview: string;
		npm_package_devDependencies__sveltejs_package: string;
		npm_package_devDependencies_publint: string;
		npm_lifecycle_event: string;
		P9K_SSH: string;
		npm_package_name: string;
		npm_package_svelte: string;
		npm_package_types: string;
		npm_package_devDependencies__sveltejs_vite_plugin_svelte: string;
		npm_package_devDependencies_marked: string;
		npm_package_packageManager: string;
		P9K_TTY: string;
		LANG: string;
		npm_package_devDependencies_stylelint_config_prettier: string;
		ITERM_PROFILE: string;
		npm_config_version_commit_hooks: string;
		npm_package_scripts_dev_figma: string;
		npm_package_scripts_build: string;
		npm_package_exports___types: string;
		npm_package_devDependencies_sass: string;
		npm_package_devDependencies_stylelint_config_standard_scss: string;
		npm_config_username: string;
		XPC_FLAGS: string;
		npm_config_bin_links: string;
		npm_package_devDependencies_stylelint: string;
		npm_package_dependencies_path: string;
		npm_package_devDependencies_eslint_config_prettier: string;
		npm_package_version: string;
		npm_package_devDependencies_vite_plugin_handlebars: string;
		XPC_SERVICE_NAME: string;
		npm_package_devDependencies_svelte_check: string;
		npm_package_type: string;
		SHLVL: string;
		HOME: string;
		COLORFGBG: string;
		npm_package_prepare: string;
		npm_config_strict_ssl: string;
		npm_config_save_prefix: string;
		LC_TERMINAL_VERSION: string;
		npm_config_version_git_message: string;
		HOMEBREW_PREFIX: string;
		npm_package_scripts_lint_js: string;
		ITERM_SESSION_ID: string;
		npm_package_scripts_format: string;
		YARN_WRAP_OUTPUT: string;
		LESS: string;
		LOGNAME: string;
		npm_package_peerDependencies_svelte: string;
		npm_lifecycle_script: string;
		RHPC_CODE_ROOT: string;
		npm_package_devDependencies__types_glob: string;
		BUN_INSTALL: string;
		NVM_BIN: string;
		npm_config_user_agent: string;
		npm_config_ignore_scripts: string;
		npm_config_version_git_sign: string;
		npm_package_files_2: string;
		npm_package_devDependencies__types_node: string;
		INFOPATH: string;
		HOMEBREW_CELLAR: string;
		npm_package_files_1: string;
		_P9K_SSH_TTY: string;
		LC_TERMINAL: string;
		npm_package_files_0: string;
		npm_config_ignore_optional: string;
		npm_config_init_version: string;
		SECURITYSESSIONID: string;
		npm_package_scripts_check: string;
		npm_config_version_tag_prefix: string;
		npm_package_sideEffects_0: string;
		npm_node_execpath: string;
		COLORTERM: string;
		NODE_ENV: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
