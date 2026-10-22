/**
 * One playground session: a graph and the engine that runs scripts against it. All structured
 * results are JSON text.
 */
export class Playground {
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        PlaygroundFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_playground_free(ptr, 0);
    }
    /**
     * One page of attic entry `id`'s commits (`limit` 0: the default page of 100):
     * `{commitCount, totals, offset, limit, commits, hasMore}`.
     * @param {string} id
     * @param {number} offset
     * @param {number} limit
     * @returns {string}
     */
    atticChanges(id, offset, limit) {
        let deferred3_0;
        let deferred3_1;
        try {
            const ptr0 = passStringToWasm0(id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len0 = WASM_VECTOR_LEN;
            const ret = wasm.playground_atticChanges(this.__wbg_ptr, ptr0, len0, offset, limit);
            var ptr2 = ret[0];
            var len2 = ret[1];
            if (ret[3]) {
                ptr2 = 0; len2 = 0;
                throw takeFromExternrefTable0(ret[2]);
            }
            deferred3_0 = ptr2;
            deferred3_1 = len2;
            return getStringFromWasm0(ptr2, len2);
        } finally {
            wasm.__wbindgen_free(deferred3_0, deferred3_1, 1);
        }
    }
    /**
     * Attic entry `id` as a new store in memory: `{fork, store}`.
     * @param {string} id
     * @returns {string}
     */
    atticFork(id) {
        let deferred3_0;
        let deferred3_1;
        try {
            const ptr0 = passStringToWasm0(id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len0 = WASM_VECTOR_LEN;
            const ret = wasm.playground_atticFork(this.__wbg_ptr, ptr0, len0);
            var ptr2 = ret[0];
            var len2 = ret[1];
            if (ret[3]) {
                ptr2 = 0; len2 = 0;
                throw takeFromExternrefTable0(ret[2]);
            }
            deferred3_0 = ptr2;
            deferred3_1 = len2;
            return getStringFromWasm0(ptr2, len2);
        } finally {
            wasm.__wbindgen_free(deferred3_0, deferred3_1, 1);
        }
    }
    /**
     * Deletes attic entry `id`: `{removed}`.
     * @param {string} id
     * @returns {string}
     */
    atticRemove(id) {
        let deferred3_0;
        let deferred3_1;
        try {
            const ptr0 = passStringToWasm0(id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len0 = WASM_VECTOR_LEN;
            const ret = wasm.playground_atticRemove(this.__wbg_ptr, ptr0, len0);
            var ptr2 = ret[0];
            var len2 = ret[1];
            if (ret[3]) {
                ptr2 = 0; len2 = 0;
                throw takeFromExternrefTable0(ret[2]);
            }
            deferred3_0 = ptr2;
            deferred3_1 = len2;
            return getStringFromWasm0(ptr2, len2);
        } finally {
            wasm.__wbindgen_free(deferred3_0, deferred3_1, 1);
        }
    }
    /**
     * Undoes the rollback of attic entry `id`: `{restored, graph, store}`.
     * @param {string} id
     * @returns {string}
     */
    atticRestore(id) {
        let deferred3_0;
        let deferred3_1;
        try {
            const ptr0 = passStringToWasm0(id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len0 = WASM_VECTOR_LEN;
            const ret = wasm.playground_atticRestore(this.__wbg_ptr, ptr0, len0);
            var ptr2 = ret[0];
            var len2 = ret[1];
            if (ret[3]) {
                ptr2 = 0; len2 = 0;
                throw takeFromExternrefTable0(ret[2]);
            }
            deferred3_0 = ptr2;
            deferred3_1 = len2;
            return getStringFromWasm0(ptr2, len2);
        } finally {
            wasm.__wbindgen_free(deferred3_0, deferred3_1, 1);
        }
    }
    /**
     * Checkpoint: a snapshot of the current state (`name` optional): `{snapshot}`.
     * @param {string} name
     * @returns {string}
     */
    checkpoint(name) {
        let deferred3_0;
        let deferred3_1;
        try {
            const ptr0 = passStringToWasm0(name, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len0 = WASM_VECTOR_LEN;
            const ret = wasm.playground_checkpoint(this.__wbg_ptr, ptr0, len0);
            var ptr2 = ret[0];
            var len2 = ret[1];
            if (ret[3]) {
                ptr2 = 0; len2 = 0;
                throw takeFromExternrefTable0(ret[2]);
            }
            deferred3_0 = ptr2;
            deferred3_1 = len2;
            return getStringFromWasm0(ptr2, len2);
        } finally {
            wasm.__wbindgen_free(deferred3_0, deferred3_1, 1);
        }
    }
    /**
     * Closes database `id` (not the active one): `{closed, store}`.
     * @param {string} id
     * @returns {string}
     */
    closeDatabase(id) {
        let deferred3_0;
        let deferred3_1;
        try {
            const ptr0 = passStringToWasm0(id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len0 = WASM_VECTOR_LEN;
            const ret = wasm.playground_closeDatabase(this.__wbg_ptr, ptr0, len0);
            var ptr2 = ret[0];
            var len2 = ret[1];
            if (ret[3]) {
                ptr2 = 0; len2 = 0;
                throw takeFromExternrefTable0(ret[2]);
            }
            deferred3_0 = ptr2;
            deferred3_1 = len2;
            return getStringFromWasm0(ptr2, len2);
        } finally {
            wasm.__wbindgen_free(deferred3_0, deferred3_1, 1);
        }
    }
    /**
     * Back to the live graph: `{view: null, graph}`.
     * @returns {string}
     */
    closeView() {
        let deferred2_0;
        let deferred2_1;
        try {
            const ret = wasm.playground_closeView(this.__wbg_ptr);
            var ptr1 = ret[0];
            var len1 = ret[1];
            if (ret[3]) {
                ptr1 = 0; len1 = 0;
                throw takeFromExternrefTable0(ret[2]);
            }
            deferred2_0 = ptr1;
            deferred2_1 = len1;
            return getStringFromWasm0(ptr1, len1);
        } finally {
            wasm.__wbindgen_free(deferred2_0, deferred2_1, 1);
        }
    }
    /**
     * Compact (in memory: a prune up to the current commit): `{compact, compaction}`. Refused
     * (nothing changed) when it would make marks unreachable and `drop_marks` is false: the
     * Store menu asks the user first and passes `true` after the confirmation.
     * @param {boolean} drop_marks
     * @returns {string}
     */
    compactStore(drop_marks) {
        let deferred2_0;
        let deferred2_1;
        try {
            const ret = wasm.playground_compactStore(this.__wbg_ptr, drop_marks);
            var ptr1 = ret[0];
            var len1 = ret[1];
            if (ret[3]) {
                ptr1 = 0; len1 = 0;
                throw takeFromExternrefTable0(ret[2]);
            }
            deferred2_0 = ptr1;
            deferred2_1 = len1;
            return getStringFromWasm0(ptr1, len1);
        } finally {
            wasm.__wbindgen_free(deferred2_0, deferred2_1, 1);
        }
    }
    /**
     * Whether Compact is worth it now (in memory: a prune), with the numbers: `{compaction}`.
     * @returns {string}
     */
    compactionAdvice() {
        let deferred2_0;
        let deferred2_1;
        try {
            const ret = wasm.playground_compactionAdvice(this.__wbg_ptr);
            var ptr1 = ret[0];
            var len1 = ret[1];
            if (ret[3]) {
                ptr1 = 0; len1 = 0;
                throw takeFromExternrefTable0(ret[2]);
            }
            deferred2_0 = ptr1;
            deferred2_1 = len1;
            return getStringFromWasm0(ptr1, len1);
        } finally {
            wasm.__wbindgen_free(deferred2_0, deferred2_1, 1);
        }
    }
    /**
     * Every DSL function, from the Rhai engine's metadata (completion catalogue).
     * @returns {string}
     */
    completions() {
        let deferred1_0;
        let deferred1_1;
        try {
            const ret = wasm.playground_completions(this.__wbg_ptr);
            deferred1_0 = ret[0];
            deferred1_1 = ret[1];
            return getStringFromWasm0(ret[0], ret[1]);
        } finally {
            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
    }
    /**
     * Creates a vertex (`{kind: "vertex", labels, id?, properties, validateOnly?}`) or an edge
     * (`{kind: "edge", label, from, to, id?, properties, validateOnly?}`) as one unit, values in
     * the typed form; answers `{ok, created, element, drawn}` or `{ok: false, errors}`.
     * @param {string} request
     * @returns {string}
     */
    createElement(request) {
        let deferred3_0;
        let deferred3_1;
        try {
            const ptr0 = passStringToWasm0(request, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len0 = WASM_VECTOR_LEN;
            const ret = wasm.playground_createElement(this.__wbg_ptr, ptr0, len0);
            var ptr2 = ret[0];
            var len2 = ret[1];
            if (ret[3]) {
                ptr2 = 0; len2 = 0;
                throw takeFromExternrefTable0(ret[2]);
            }
            deferred3_0 = ptr2;
            deferred3_1 = len2;
            return getStringFromWasm0(ptr2, len2);
        } finally {
            wasm.__wbindgen_free(deferred3_0, deferred3_1, 1);
        }
    }
    /**
     * Creates a property index from the form's spec (JSON text `{label, key, element?,
     * name?}`): `{ok, index}` or `{ok: false, errors: [{field, message, help?}]}`; never throws
     * for a refused index.
     * @param {string} spec
     * @returns {string}
     */
    createIndex(spec) {
        let deferred3_0;
        let deferred3_1;
        try {
            const ptr0 = passStringToWasm0(spec, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len0 = WASM_VECTOR_LEN;
            const ret = wasm.playground_createIndex(this.__wbg_ptr, ptr0, len0);
            var ptr2 = ret[0];
            var len2 = ret[1];
            if (ret[3]) {
                ptr2 = 0; len2 = 0;
                throw takeFromExternrefTable0(ret[2]);
            }
            deferred3_0 = ptr2;
            deferred3_1 = len2;
            return getStringFromWasm0(ptr2, len2);
        } finally {
            wasm.__wbindgen_free(deferred3_0, deferred3_1, 1);
        }
    }
    /**
     * Defines or replaces a compression rule from the form's spec (JSON text): `{ok, rule}` or
     * `{ok: false, errors: [{field, message, help?}]}`; never throws for a refused rule.
     * @param {string} spec
     * @returns {string}
     */
    defineCompression(spec) {
        let deferred3_0;
        let deferred3_1;
        try {
            const ptr0 = passStringToWasm0(spec, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len0 = WASM_VECTOR_LEN;
            const ret = wasm.playground_defineCompression(this.__wbg_ptr, ptr0, len0);
            var ptr2 = ret[0];
            var len2 = ret[1];
            if (ret[3]) {
                ptr2 = 0; len2 = 0;
                throw takeFromExternrefTable0(ret[2]);
            }
            deferred3_0 = ptr2;
            deferred3_1 = len2;
            return getStringFromWasm0(ptr2, len2);
        } finally {
            wasm.__wbindgen_free(deferred3_0, deferred3_1, 1);
        }
    }
    /**
     * Defines or replaces a saved query from the editor's spec (JSON text): `{ok, query}` or
     * `{ok: false, errors: [{field, message, help?}]}`; never throws for a refused definition.
     * @param {string} spec
     * @returns {string}
     */
    defineQuery(spec) {
        let deferred3_0;
        let deferred3_1;
        try {
            const ptr0 = passStringToWasm0(spec, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len0 = WASM_VECTOR_LEN;
            const ret = wasm.playground_defineQuery(this.__wbg_ptr, ptr0, len0);
            var ptr2 = ret[0];
            var len2 = ret[1];
            if (ret[3]) {
                ptr2 = 0; len2 = 0;
                throw takeFromExternrefTable0(ret[2]);
            }
            deferred3_0 = ptr2;
            deferred3_1 = len2;
            return getStringFromWasm0(ptr2, len2);
        } finally {
            wasm.__wbindgen_free(deferred3_0, deferred3_1, 1);
        }
    }
    /**
     * Deletes a vertex (with its edges) or an edge as one unit: `{kind, id, validateOnly?}`;
     * answers `{ok, deleted, edges}` or `{ok: false, errors}`.
     * @param {string} request
     * @returns {string}
     */
    deleteElement(request) {
        let deferred3_0;
        let deferred3_1;
        try {
            const ptr0 = passStringToWasm0(request, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len0 = WASM_VECTOR_LEN;
            const ret = wasm.playground_deleteElement(this.__wbg_ptr, ptr0, len0);
            var ptr2 = ret[0];
            var len2 = ret[1];
            if (ret[3]) {
                ptr2 = 0; len2 = 0;
                throw takeFromExternrefTable0(ret[2]);
            }
            deferred3_0 = ptr2;
            deferred3_1 = len2;
            return getStringFromWasm0(ptr2, len2);
        } finally {
            wasm.__wbindgen_free(deferred3_0, deferred3_1, 1);
        }
    }
    /**
     * `diff_schema`: `{changes, compatible}` from the stored schema to a proposed one.
     * @param {string} json
     * @returns {string}
     */
    diffSchema(json) {
        let deferred3_0;
        let deferred3_1;
        try {
            const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len0 = WASM_VECTOR_LEN;
            const ret = wasm.playground_diffSchema(this.__wbg_ptr, ptr0, len0);
            var ptr2 = ret[0];
            var len2 = ret[1];
            if (ret[3]) {
                ptr2 = 0; len2 = 0;
                throw takeFromExternrefTable0(ret[2]);
            }
            deferred3_0 = ptr2;
            deferred3_1 = len2;
            return getStringFromWasm0(ptr2, len2);
        } finally {
            wasm.__wbindgen_free(deferred3_0, deferred3_1, 1);
        }
    }
    /**
     * Drops the compression rule `name` (its values are decompressed): `{dropped}`.
     * @param {string} name
     * @returns {string}
     */
    dropCompression(name) {
        let deferred3_0;
        let deferred3_1;
        try {
            const ptr0 = passStringToWasm0(name, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len0 = WASM_VECTOR_LEN;
            const ret = wasm.playground_dropCompression(this.__wbg_ptr, ptr0, len0);
            var ptr2 = ret[0];
            var len2 = ret[1];
            if (ret[3]) {
                ptr2 = 0; len2 = 0;
                throw takeFromExternrefTable0(ret[2]);
            }
            deferred3_0 = ptr2;
            deferred3_1 = len2;
            return getStringFromWasm0(ptr2, len2);
        } finally {
            wasm.__wbindgen_free(deferred3_0, deferred3_1, 1);
        }
    }
    /**
     * Drops the property index `name`: `{dropped}`.
     * @param {string} name
     * @returns {string}
     */
    dropIndex(name) {
        let deferred3_0;
        let deferred3_1;
        try {
            const ptr0 = passStringToWasm0(name, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len0 = WASM_VECTOR_LEN;
            const ret = wasm.playground_dropIndex(this.__wbg_ptr, ptr0, len0);
            var ptr2 = ret[0];
            var len2 = ret[1];
            if (ret[3]) {
                ptr2 = 0; len2 = 0;
                throw takeFromExternrefTable0(ret[2]);
            }
            deferred3_0 = ptr2;
            deferred3_1 = len2;
            return getStringFromWasm0(ptr2, len2);
        } finally {
            wasm.__wbindgen_free(deferred3_0, deferred3_1, 1);
        }
    }
    /**
     * Drops the saved query `name`: `{dropped}`.
     * @param {string} name
     * @returns {string}
     */
    dropQuery(name) {
        let deferred3_0;
        let deferred3_1;
        try {
            const ptr0 = passStringToWasm0(name, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len0 = WASM_VECTOR_LEN;
            const ret = wasm.playground_dropQuery(this.__wbg_ptr, ptr0, len0);
            var ptr2 = ret[0];
            var len2 = ret[1];
            if (ret[3]) {
                ptr2 = 0; len2 = 0;
                throw takeFromExternrefTable0(ret[2]);
            }
            deferred3_0 = ptr2;
            deferred3_1 = len2;
            return getStringFromWasm0(ptr2, len2);
        } finally {
            wasm.__wbindgen_free(deferred3_0, deferred3_1, 1);
        }
    }
    /**
     * One element for the property editor, its properties in the typed form
     * (`graphersal_session::edit`): `{kind, id, label, labels, source?, target?, properties:
     * [[key, typed]], readOnly}`; `null` when it does not exist; an unknown kind throws.
     * @param {string} kind
     * @param {string} id
     * @returns {string}
     */
    elementForEdit(kind, id) {
        let deferred4_0;
        let deferred4_1;
        try {
            const ptr0 = passStringToWasm0(kind, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len0 = WASM_VECTOR_LEN;
            const ptr1 = passStringToWasm0(id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len1 = WASM_VECTOR_LEN;
            const ret = wasm.playground_elementForEdit(this.__wbg_ptr, ptr0, len0, ptr1, len1);
            var ptr3 = ret[0];
            var len3 = ret[1];
            if (ret[3]) {
                ptr3 = 0; len3 = 0;
                throw takeFromExternrefTable0(ret[2]);
            }
            deferred4_0 = ptr3;
            deferred4_1 = len3;
            return getStringFromWasm0(ptr3, len3);
        } finally {
            wasm.__wbindgen_free(deferred4_0, deferred4_1, 1);
        }
    }
    /**
     * One element with its properties, for the inspector: `kind` `"vertex"` or `"edge"`.
     * `null` when it does not exist (any more); an unknown kind throws.
     * @param {string} kind
     * @param {string} id
     * @returns {string}
     */
    element(kind, id) {
        let deferred4_0;
        let deferred4_1;
        try {
            const ptr0 = passStringToWasm0(kind, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len0 = WASM_VECTOR_LEN;
            const ptr1 = passStringToWasm0(id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len1 = WASM_VECTOR_LEN;
            const ret = wasm.playground_element(this.__wbg_ptr, ptr0, len0, ptr1, len1);
            var ptr3 = ret[0];
            var len3 = ret[1];
            if (ret[3]) {
                ptr3 = 0; len3 = 0;
                throw takeFromExternrefTable0(ret[2]);
            }
            deferred4_0 = ptr3;
            deferred4_1 = len3;
            return getStringFromWasm0(ptr3, len3);
        } finally {
            wasm.__wbindgen_free(deferred4_0, deferred4_1, 1);
        }
    }
    /**
     * Estimates compression rules for an estimate spec (JSON text `{label, path, element?,
     * codec?, minBytes?, dictionary?}`) without changing the graph: `{ok, estimate}` or `{ok:
     * false, errors: [{field, message, help?}]}` (`graphersal_session::compression`); never
     * throws for a refused spec.
     * @param {string} spec
     * @returns {string}
     */
    estimateCompression(spec) {
        let deferred3_0;
        let deferred3_1;
        try {
            const ptr0 = passStringToWasm0(spec, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len0 = WASM_VECTOR_LEN;
            const ret = wasm.playground_estimateCompression(this.__wbg_ptr, ptr0, len0);
            var ptr2 = ret[0];
            var len2 = ret[1];
            if (ret[3]) {
                ptr2 = 0; len2 = 0;
                throw takeFromExternrefTable0(ret[2]);
            }
            deferred3_0 = ptr2;
            deferred3_1 = len2;
            return getStringFromWasm0(ptr2, len2);
        } finally {
            wasm.__wbindgen_free(deferred3_0, deferred3_1, 1);
        }
    }
    /**
     * Runs a script; `options` is the JSON of `RunOptions` (`{profile, profile_types,
     * max_rows, max_items, no_limit, spelling}`, all optional). Returns the `ExecuteResponse` JSON
     * (engine.js). A failing script is a response with `ok: false`, never an exception; only
     * malformed `options` throw.
     * @param {string} script
     * @param {string} options
     * @returns {string}
     */
    execute(script, options) {
        let deferred4_0;
        let deferred4_1;
        try {
            const ptr0 = passStringToWasm0(script, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len0 = WASM_VECTOR_LEN;
            const ptr1 = passStringToWasm0(options, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len1 = WASM_VECTOR_LEN;
            const ret = wasm.playground_execute(this.__wbg_ptr, ptr0, len0, ptr1, len1);
            var ptr3 = ret[0];
            var len3 = ret[1];
            if (ret[3]) {
                ptr3 = 0; len3 = 0;
                throw takeFromExternrefTable0(ret[2]);
            }
            deferred4_0 = ptr3;
            deferred4_1 = len3;
            return getStringFromWasm0(ptr3, len3);
        } finally {
            wasm.__wbindgen_free(deferred4_0, deferred4_1, 1);
        }
    }
    /**
     * Forks the state at `{target}` into a new store in memory, added to the databases:
     * `{fork, store}`.
     * @param {string} body
     * @returns {string}
     */
    fork(body) {
        let deferred3_0;
        let deferred3_1;
        try {
            const ptr0 = passStringToWasm0(body, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len0 = WASM_VECTOR_LEN;
            const ret = wasm.playground_fork(this.__wbg_ptr, ptr0, len0);
            var ptr2 = ret[0];
            var len2 = ret[1];
            if (ret[3]) {
                ptr2 = 0; len2 = 0;
                throw takeFromExternrefTable0(ret[2]);
            }
            deferred3_0 = ptr2;
            deferred3_1 = len2;
            return getStringFromWasm0(ptr2, len2);
        } finally {
            wasm.__wbindgen_free(deferred3_0, deferred3_1, 1);
        }
    }
    /**
     * The saved query `name` with its body, or `null`.
     * @param {string} name
     * @returns {string}
     */
    getQuery(name) {
        let deferred2_0;
        let deferred2_1;
        try {
            const ptr0 = passStringToWasm0(name, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len0 = WASM_VECTOR_LEN;
            const ret = wasm.playground_getQuery(this.__wbg_ptr, ptr0, len0);
            deferred2_0 = ret[0];
            deferred2_1 = ret[1];
            return getStringFromWasm0(ret[0], ret[1]);
        } finally {
            wasm.__wbindgen_free(deferred2_0, deferred2_1, 1);
        }
    }
    /**
     * `get_schema`: the stored schema as JSON text (the schema format, canonical key and
     * property order), or `null`.
     * @returns {string}
     */
    getSchema() {
        let deferred1_0;
        let deferred1_1;
        try {
            const ret = wasm.playground_getSchema(this.__wbg_ptr);
            deferred1_0 = ret[0];
            deferred1_1 = ret[1];
            return getStringFromWasm0(ret[0], ret[1]);
        } finally {
            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
    }
    /**
     * The graph to draw as columns (`CompactGraph`: `{vertexIds, vertexLabel, vertexName,
     * edgeIds, edgeSource, edgeTarget, edgeLabel, labels, truncated, totalNodes, totalEdges}`),
     * without properties (see [`Self::element`]).
     * @param {number} max_nodes
     * @param {number} max_edges
     * @returns {string}
     */
    graphView(max_nodes, max_edges) {
        let deferred1_0;
        let deferred1_1;
        try {
            const ret = wasm.playground_graphView(this.__wbg_ptr, max_nodes, max_edges);
            deferred1_0 = ret[0];
            deferred1_1 = ret[1];
            return getStringFromWasm0(ret[0], ret[1]);
        } finally {
            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
    }
    /**
     * `infer_schema`: the schema the data satisfies, as JSON text; stores nothing.
     * @returns {string}
     */
    inferSchema() {
        let deferred1_0;
        let deferred1_1;
        try {
            const ret = wasm.playground_inferSchema(this.__wbg_ptr);
            deferred1_0 = ret[0];
            deferred1_1 = ret[1];
            return getStringFromWasm0(ret[0], ret[1]);
        } finally {
            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
    }
    /**
     * The loaded graph: `{name, kind, vertexCount, edgeCount, schemaMode, warnings}`.
     * @returns {string}
     */
    info() {
        let deferred1_0;
        let deferred1_1;
        try {
            const ret = wasm.playground_info(this.__wbg_ptr);
            deferred1_0 = ret[0];
            deferred1_1 = ret[1];
            return getStringFromWasm0(ret[0], ret[1]);
        } finally {
            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
    }
    /**
     * The label choices of the Graph panel's creation dialog (`graphersal_session::create`):
     * `request` is JSON `{kind: "vertex"}` or `{kind: "edge", from, to}`; answers `{kind, mode,
     * free, labels: [{label, declared, count, connects}], readOnly}`. A bad request throws.
     * @param {string} request
     * @returns {string}
     */
    labelChoices(request) {
        let deferred3_0;
        let deferred3_1;
        try {
            const ptr0 = passStringToWasm0(request, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len0 = WASM_VECTOR_LEN;
            const ret = wasm.playground_labelChoices(this.__wbg_ptr, ptr0, len0);
            var ptr2 = ret[0];
            var len2 = ret[1];
            if (ret[3]) {
                ptr2 = 0; len2 = 0;
                throw takeFromExternrefTable0(ret[2]);
            }
            deferred3_0 = ptr2;
            deferred3_1 = len2;
            return getStringFromWasm0(ptr2, len2);
        } finally {
            wasm.__wbindgen_free(deferred3_0, deferred3_1, 1);
        }
    }
    /**
     * A sample of one vertex label (`{vertices: {labels, exclude?}}`) or one label pair
     * (`{edge: {label, from?, to?}}`), with `maxNodes`/`maxEdges`: the drawing's columns plus
     * `sample: {kind, shown, total, complete}`.
     * @param {string} request
     * @returns {string}
     */
    labelSample(request) {
        let deferred3_0;
        let deferred3_1;
        try {
            const ptr0 = passStringToWasm0(request, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len0 = WASM_VECTOR_LEN;
            const ret = wasm.playground_labelSample(this.__wbg_ptr, ptr0, len0);
            var ptr2 = ret[0];
            var len2 = ret[1];
            if (ret[3]) {
                ptr2 = 0; len2 = 0;
                throw takeFromExternrefTable0(ret[2]);
            }
            deferred3_0 = ptr2;
            deferred3_1 = len2;
            return getStringFromWasm0(ptr2, len2);
        } finally {
            wasm.__wbindgen_free(deferred3_0, deferred3_1, 1);
        }
    }
    /**
     * Cancels layout `job`, keeping the positions reached so far; answers its status.
     * @param {number} job
     * @returns {string}
     */
    layoutCancel(job) {
        let deferred2_0;
        let deferred2_1;
        try {
            const ret = wasm.playground_layoutCancel(this.__wbg_ptr, job);
            var ptr1 = ret[0];
            var len1 = ret[1];
            if (ret[3]) {
                ptr1 = 0; len1 = 0;
                throw takeFromExternrefTable0(ret[2]);
            }
            deferred2_0 = ptr1;
            deferred2_1 = len1;
            return getStringFromWasm0(ptr1, len1);
        } finally {
            wasm.__wbindgen_free(deferred2_0, deferred2_1, 1);
        }
    }
    /**
     * The positions of layout `job` as a `Float32Array` (`x, y` per vertex); a job that is no
     * longer running is forgotten afterwards.
     * @param {number} job
     * @returns {Float32Array}
     */
    layoutPositions(job) {
        const ret = wasm.playground_layoutPositions(this.__wbg_ptr, job);
        if (ret[3]) {
            throw takeFromExternrefTable0(ret[2]);
        }
        var v1 = getArrayF32FromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 4, 4);
        return v1;
    }
    /**
     * Starts the engine's force layout of a drawing (`vertexCount` vertices, edges from
     * `edgeSource[j]` to `edgeTarget[j]`, the drawing's index columns as `Uint32Array`s) and runs
     * its first slice of `budgetMs`. `options` is JSON `{seed?, iterations?}` (or empty). Answers
     * the status JSON `{job, state, iterations, totalIterations, progress, elapsedMs,
     * vertexCount, cached}`; a finished (`done`) or `cancelled` job has its positions in
     * [`Self::layout_positions`]. A layout of a drawing laid out recently is answered from the
     * cache.
     * @param {number} vertex_count
     * @param {Uint32Array} edge_source
     * @param {Uint32Array} edge_target
     * @param {string} options
     * @param {number} budget_ms
     * @returns {string}
     */
    layoutStart(vertex_count, edge_source, edge_target, options, budget_ms) {
        let deferred5_0;
        let deferred5_1;
        try {
            const ptr0 = passArray32ToWasm0(edge_source, wasm.__wbindgen_malloc);
            const len0 = WASM_VECTOR_LEN;
            const ptr1 = passArray32ToWasm0(edge_target, wasm.__wbindgen_malloc);
            const len1 = WASM_VECTOR_LEN;
            const ptr2 = passStringToWasm0(options, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len2 = WASM_VECTOR_LEN;
            const ret = wasm.playground_layoutStart(this.__wbg_ptr, vertex_count, ptr0, len0, ptr1, len1, ptr2, len2, budget_ms);
            var ptr4 = ret[0];
            var len4 = ret[1];
            if (ret[3]) {
                ptr4 = 0; len4 = 0;
                throw takeFromExternrefTable0(ret[2]);
            }
            deferred5_0 = ptr4;
            deferred5_1 = len4;
            return getStringFromWasm0(ptr4, len4);
        } finally {
            wasm.__wbindgen_free(deferred5_0, deferred5_1, 1);
        }
    }
    /**
     * Runs the next slice (`budgetMs`) of layout `job`; answers its status (see
     * [`Self::layout_start`]).
     * @param {number} job
     * @param {number} budget_ms
     * @returns {string}
     */
    layoutStep(job, budget_ms) {
        let deferred2_0;
        let deferred2_1;
        try {
            const ret = wasm.playground_layoutStep(this.__wbg_ptr, job, budget_ms);
            var ptr1 = ret[0];
            var len1 = ret[1];
            if (ret[3]) {
                ptr1 = 0; len1 = 0;
                throw takeFromExternrefTable0(ret[2]);
            }
            deferred2_0 = ptr1;
            deferred2_1 = len1;
            return getStringFromWasm0(ptr1, len1);
        } finally {
            wasm.__wbindgen_free(deferred2_0, deferred2_1, 1);
        }
    }
    /**
     * The compression rules with their current stats, as JSON text: `[{name, element, label,
     * path, codec, minBytes, dictionary, stats}]` (`graphersal_session::compression`).
     * @returns {string}
     */
    listCompressions() {
        let deferred1_0;
        let deferred1_1;
        try {
            const ret = wasm.playground_listCompressions(this.__wbg_ptr);
            deferred1_0 = ret[0];
            deferred1_1 = ret[1];
            return getStringFromWasm0(ret[0], ret[1]);
        } finally {
            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
    }
    /**
     * The property indexes with their current stats, as JSON text: `[{name, element, label,
     * key, served, stats}]` (`graphersal_session::indexes`).
     * @returns {string}
     */
    listIndexes() {
        let deferred1_0;
        let deferred1_1;
        try {
            const ret = wasm.playground_listIndexes(this.__wbg_ptr);
            deferred1_0 = ret[0];
            deferred1_1 = ret[1];
            return getStringFromWasm0(ret[0], ret[1]);
        } finally {
            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
    }
    /**
     * The saved queries (`folder`: only those in it and below it), as JSON text:
     * `[{name, folder, description, params, status, error?}]` (`graphersal_session::queries`).
     * @param {string | null} [folder]
     * @returns {string}
     */
    listQueries(folder) {
        let deferred2_0;
        let deferred2_1;
        try {
            var ptr0 = isLikeNone(folder) ? 0 : passStringToWasm0(folder, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            var len0 = WASM_VECTOR_LEN;
            const ret = wasm.playground_listQueries(this.__wbg_ptr, ptr0, len0);
            deferred2_0 = ret[0];
            deferred2_1 = ret[1];
            return getStringFromWasm0(ret[0], ret[1]);
        } finally {
            wasm.__wbindgen_free(deferred2_0, deferred2_1, 1);
        }
    }
    /**
     * "Catalog ▸ Load catalog": stores the definitions of a catalog file (JSON text) in one
     * commit; `replace` drops those the file does not have. `{loaded, graph}`.
     * @param {string} text
     * @param {boolean} replace
     * @returns {string}
     */
    loadCatalog(text, replace) {
        let deferred3_0;
        let deferred3_1;
        try {
            const ptr0 = passStringToWasm0(text, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len0 = WASM_VECTOR_LEN;
            const ret = wasm.playground_loadCatalog(this.__wbg_ptr, ptr0, len0, replace);
            var ptr2 = ret[0];
            var len2 = ret[1];
            if (ret[3]) {
                ptr2 = 0; len2 = 0;
                throw takeFromExternrefTable0(ret[2]);
            }
            deferred3_0 = ptr2;
            deferred3_1 = len2;
            return getStringFromWasm0(ptr2, len2);
        } finally {
            wasm.__wbindgen_free(deferred3_0, deferred3_1, 1);
        }
    }
    /**
     * [`Self::load_graphml`] from the bytes of a file (UTF-8 GraphML).
     * @param {Uint8Array} bytes
     * @param {string} name
     * @param {string | null} [schema]
     * @returns {string}
     */
    loadGraphmlBytes(bytes, name, schema) {
        let deferred5_0;
        let deferred5_1;
        try {
            const ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
            const len0 = WASM_VECTOR_LEN;
            const ptr1 = passStringToWasm0(name, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len1 = WASM_VECTOR_LEN;
            var ptr2 = isLikeNone(schema) ? 0 : passStringToWasm0(schema, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            var len2 = WASM_VECTOR_LEN;
            const ret = wasm.playground_loadGraphmlBytes(this.__wbg_ptr, ptr0, len0, ptr1, len1, ptr2, len2);
            var ptr4 = ret[0];
            var len4 = ret[1];
            if (ret[3]) {
                ptr4 = 0; len4 = 0;
                throw takeFromExternrefTable0(ret[2]);
            }
            deferred5_0 = ptr4;
            deferred5_1 = len4;
            return getStringFromWasm0(ptr4, len4);
        } finally {
            wasm.__wbindgen_free(deferred5_0, deferred5_1, 1);
        }
    }
    /**
     * Replaces the graph by one imported from GraphML text; returns the graph info JSON. The new
     * graph starts WITHOUT the current graph's schema (GraphML carries none). `schema` is the
     * optional schema file (JSON text): it is set on the new empty graph first and the data is
     * imported against it as one unit, so declared logical types come back and `open`/`closed`
     * are enforced. The current graph stays when the load fails.
     * @param {string} text
     * @param {string} name
     * @param {string | null} [schema]
     * @returns {string}
     */
    loadGraphml(text, name, schema) {
        let deferred5_0;
        let deferred5_1;
        try {
            const ptr0 = passStringToWasm0(text, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len0 = WASM_VECTOR_LEN;
            const ptr1 = passStringToWasm0(name, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len1 = WASM_VECTOR_LEN;
            var ptr2 = isLikeNone(schema) ? 0 : passStringToWasm0(schema, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            var len2 = WASM_VECTOR_LEN;
            const ret = wasm.playground_loadGraphml(this.__wbg_ptr, ptr0, len0, ptr1, len1, ptr2, len2);
            var ptr4 = ret[0];
            var len4 = ret[1];
            if (ret[3]) {
                ptr4 = 0; len4 = 0;
                throw takeFromExternrefTable0(ret[2]);
            }
            deferred5_0 = ptr4;
            deferred5_1 = len4;
            return getStringFromWasm0(ptr4, len4);
        } finally {
            wasm.__wbindgen_free(deferred5_0, deferred5_1, 1);
        }
    }
    /**
     * [`Self::load_graphson`] from the bytes of a file (UTF-8 GraphSON).
     * @param {Uint8Array} bytes
     * @param {string} name
     * @param {string | null} [schema]
     * @returns {string}
     */
    loadGraphsonBytes(bytes, name, schema) {
        let deferred5_0;
        let deferred5_1;
        try {
            const ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
            const len0 = WASM_VECTOR_LEN;
            const ptr1 = passStringToWasm0(name, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len1 = WASM_VECTOR_LEN;
            var ptr2 = isLikeNone(schema) ? 0 : passStringToWasm0(schema, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            var len2 = WASM_VECTOR_LEN;
            const ret = wasm.playground_loadGraphsonBytes(this.__wbg_ptr, ptr0, len0, ptr1, len1, ptr2, len2);
            var ptr4 = ret[0];
            var len4 = ret[1];
            if (ret[3]) {
                ptr4 = 0; len4 = 0;
                throw takeFromExternrefTable0(ret[2]);
            }
            deferred5_0 = ptr4;
            deferred5_1 = len4;
            return getStringFromWasm0(ptr4, len4);
        } finally {
            wasm.__wbindgen_free(deferred5_0, deferred5_1, 1);
        }
    }
    /**
     * Replaces the graph by one imported from GraphSON text (line or wrapped form); returns the
     * graph info JSON, whose `warnings` list what the import skipped (dates, unsupported types,
     * dangling edges). Like [`Self::load_graphml`], the new graph starts without the current
     * graph's schema and the optional `schema` (JSON text) is set first. The current graph
     * stays when the load fails.
     * @param {string} text
     * @param {string} name
     * @param {string | null} [schema]
     * @returns {string}
     */
    loadGraphson(text, name, schema) {
        let deferred5_0;
        let deferred5_1;
        try {
            const ptr0 = passStringToWasm0(text, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len0 = WASM_VECTOR_LEN;
            const ptr1 = passStringToWasm0(name, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len1 = WASM_VECTOR_LEN;
            var ptr2 = isLikeNone(schema) ? 0 : passStringToWasm0(schema, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            var len2 = WASM_VECTOR_LEN;
            const ret = wasm.playground_loadGraphson(this.__wbg_ptr, ptr0, len0, ptr1, len1, ptr2, len2);
            var ptr4 = ret[0];
            var len4 = ret[1];
            if (ret[3]) {
                ptr4 = 0; len4 = 0;
                throw takeFromExternrefTable0(ret[2]);
            }
            deferred5_0 = ptr4;
            deferred5_1 = len4;
            return getStringFromWasm0(ptr4, len4);
        } finally {
            wasm.__wbindgen_free(deferred5_0, deferred5_1, 1);
        }
    }
    /**
     * Replaces the graph by a sample (`empty`, `modern`, `large`, `tree`); returns the graph
     * info JSON.
     * @param {string} kind
     * @returns {string}
     */
    loadSample(kind) {
        let deferred3_0;
        let deferred3_1;
        try {
            const ptr0 = passStringToWasm0(kind, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len0 = WASM_VECTOR_LEN;
            const ret = wasm.playground_loadSample(this.__wbg_ptr, ptr0, len0);
            var ptr2 = ret[0];
            var len2 = ret[1];
            if (ret[3]) {
                ptr2 = 0; len2 = 0;
                throw takeFromExternrefTable0(ret[2]);
            }
            deferred3_0 = ptr2;
            deferred3_1 = len2;
            return getStringFromWasm0(ptr2, len2);
        } finally {
            wasm.__wbindgen_free(deferred3_0, deferred3_1, 1);
        }
    }
    /**
     * Replaces the graph by one read from a packed snapshot (`.gsnap`, the lossless binary
     * format with its own schema); returns the graph info JSON. The current graph stays when
     * the file is damaged.
     * @param {Uint8Array} bytes
     * @param {string} name
     * @returns {string}
     */
    loadSnapshotBytes(bytes, name) {
        let deferred4_0;
        let deferred4_1;
        try {
            const ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
            const len0 = WASM_VECTOR_LEN;
            const ptr1 = passStringToWasm0(name, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len1 = WASM_VECTOR_LEN;
            const ret = wasm.playground_loadSnapshotBytes(this.__wbg_ptr, ptr0, len0, ptr1, len1);
            var ptr3 = ret[0];
            var len3 = ret[1];
            if (ret[3]) {
                ptr3 = 0; len3 = 0;
                throw takeFromExternrefTable0(ret[2]);
            }
            deferred4_0 = ptr3;
            deferred4_1 = len3;
            return getStringFromWasm0(ptr3, len3);
        } finally {
            wasm.__wbindgen_free(deferred4_0, deferred4_1, 1);
        }
    }
    /**
     * Mark: names the current position: `{mark}`.
     * @param {string} name
     * @returns {string}
     */
    mark(name) {
        let deferred3_0;
        let deferred3_1;
        try {
            const ptr0 = passStringToWasm0(name, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len0 = WASM_VECTOR_LEN;
            const ret = wasm.playground_mark(this.__wbg_ptr, ptr0, len0);
            var ptr2 = ret[0];
            var len2 = ret[1];
            if (ret[3]) {
                ptr2 = 0; len2 = 0;
                throw takeFromExternrefTable0(ret[2]);
            }
            deferred3_0 = ptr2;
            deferred3_1 = len2;
            return getStringFromWasm0(ptr2, len2);
        } finally {
            wasm.__wbindgen_free(deferred3_0, deferred3_1, 1);
        }
    }
    /**
     * Whether `.profile_with(ProfileType::Memory)` reports exact (`"tracked"`) figures.
     * @returns {boolean}
     */
    static memoryTracked() {
        const ret = wasm.playground_memoryTracked();
        return ret !== 0;
    }
    /**
     * The graph's own memory footprint (`g.memory_usage()`), or `null`.
     * @returns {string}
     */
    memoryUsage() {
        let deferred1_0;
        let deferred1_1;
        try {
            const ret = wasm.playground_memoryUsage(this.__wbg_ptr);
            deferred1_0 = ret[0];
            deferred1_1 = ret[1];
            return getStringFromWasm0(ret[0], ret[1]);
        } finally {
            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
    }
    /**
     * The label meta-graph: `{labels: [{label, count}], other, edges: [{label, from, to,
     * count}], otherPairs, otherEdges, labelTotal, vertexCount, edgeCount, scannedEdges,
     * complete}`.
     * @returns {string}
     */
    metaGraph() {
        let deferred2_0;
        let deferred2_1;
        try {
            const ret = wasm.playground_metaGraph(this.__wbg_ptr);
            var ptr1 = ret[0];
            var len1 = ret[1];
            if (ret[3]) {
                ptr1 = 0; len1 = 0;
                throw takeFromExternrefTable0(ret[2]);
            }
            deferred2_0 = ptr1;
            deferred2_1 = len1;
            return getStringFromWasm0(ptr1, len1);
        } finally {
            wasm.__wbindgen_free(deferred2_0, deferred2_1, 1);
        }
    }
    /**
     * Moves the saved query `name` into `folder` (empty: the root); its entry.
     * @param {string} name
     * @param {string} folder
     * @returns {string}
     */
    moveQuery(name, folder) {
        let deferred4_0;
        let deferred4_1;
        try {
            const ptr0 = passStringToWasm0(name, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len0 = WASM_VECTOR_LEN;
            const ptr1 = passStringToWasm0(folder, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len1 = WASM_VECTOR_LEN;
            const ret = wasm.playground_moveQuery(this.__wbg_ptr, ptr0, len0, ptr1, len1);
            var ptr3 = ret[0];
            var len3 = ret[1];
            if (ret[3]) {
                ptr3 = 0; len3 = 0;
                throw takeFromExternrefTable0(ret[2]);
            }
            deferred4_0 = ptr3;
            deferred4_1 = len3;
            return getStringFromWasm0(ptr3, len3);
        } finally {
            wasm.__wbindgen_free(deferred4_0, deferred4_1, 1);
        }
    }
    /**
     * The neighbourhood of vertices for the Graph panel: `request` is JSON `{ids, hops?,
     * direction?, keep?, maxNodes?, maxEdges?}` (`hops` the depth, at most 5; `direction`
     * `both`, `out` or `in`); answers the drawing's columns plus `seeds`, `missing`,
     * `hiddenEdges` and, when the limits cut it, `leftOut: {vertices, edges, complete}`
     * (graphersal-session `selection::SelectionView`). An unknown id or a
     * malformed request throws.
     * @param {string} request
     * @returns {string}
     */
    neighbourhood(request) {
        let deferred3_0;
        let deferred3_1;
        try {
            const ptr0 = passStringToWasm0(request, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len0 = WASM_VECTOR_LEN;
            const ret = wasm.playground_neighbourhood(this.__wbg_ptr, ptr0, len0);
            var ptr2 = ret[0];
            var len2 = ret[1];
            if (ret[3]) {
                ptr2 = 0; len2 = 0;
                throw takeFromExternrefTable0(ret[2]);
            }
            deferred3_0 = ptr2;
            deferred3_1 = len2;
            return getStringFromWasm0(ptr2, len2);
        } finally {
            wasm.__wbindgen_free(deferred3_0, deferred3_1, 1);
        }
    }
    /**
     * A session over an empty graph. Every graph it loads is kept as a Store in memory
     * (commit 0 = the loaded state): the Store menu's operations below work on it, and all of
     * it is lost with the page.
     */
    constructor() {
        const ret = wasm.playground_new();
        this.__wbg_ptr = ret;
        PlaygroundFinalization.register(this, this.__wbg_ptr, this);
        return this;
    }
    /**
     * Opens a read-only view of the state at `{target}` (JSON text): `{view, graph}`.
     * @param {string} body
     * @returns {string}
     */
    openView(body) {
        let deferred3_0;
        let deferred3_1;
        try {
            const ptr0 = passStringToWasm0(body, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len0 = WASM_VECTOR_LEN;
            const ret = wasm.playground_openView(this.__wbg_ptr, ptr0, len0);
            var ptr2 = ret[0];
            var len2 = ret[1];
            if (ret[3]) {
                ptr2 = 0; len2 = 0;
                throw takeFromExternrefTable0(ret[2]);
            }
            deferred3_0 = ptr2;
            deferred3_1 = len2;
            return getStringFromWasm0(ptr2, len2);
        } finally {
            wasm.__wbindgen_free(deferred3_0, deferred3_1, 1);
        }
    }
    /**
     * `patch_schema`: applies a JSON Merge Patch (JSON text) to the stored schema and stores
     * the result; returns the new schema JSON. Fails (and changes nothing) like `setSchema`.
     * @param {string} patch
     * @returns {string}
     */
    patchSchema(patch) {
        let deferred3_0;
        let deferred3_1;
        try {
            const ptr0 = passStringToWasm0(patch, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len0 = WASM_VECTOR_LEN;
            const ret = wasm.playground_patchSchema(this.__wbg_ptr, ptr0, len0);
            var ptr2 = ret[0];
            var len2 = ret[1];
            if (ret[3]) {
                ptr2 = 0; len2 = 0;
                throw takeFromExternrefTable0(ret[2]);
            }
            deferred3_0 = ptr2;
            deferred3_1 = len2;
            return getStringFromWasm0(ptr2, len2);
        } finally {
            wasm.__wbindgen_free(deferred3_0, deferred3_1, 1);
        }
    }
    /**
     * The preview of a call of the saved query `name` with the named arguments `args` (JSON
     * text of an object), run as a dry run and rolled back: `{ok, changes}` or `{ok: false,
     * error}` (`graphersal_session::Session::preview_query`).
     * @param {string} name
     * @param {string} args
     * @returns {string}
     */
    previewQuery(name, args) {
        let deferred4_0;
        let deferred4_1;
        try {
            const ptr0 = passStringToWasm0(name, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len0 = WASM_VECTOR_LEN;
            const ptr1 = passStringToWasm0(args, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len1 = WASM_VECTOR_LEN;
            const ret = wasm.playground_previewQuery(this.__wbg_ptr, ptr0, len0, ptr1, len1);
            var ptr3 = ret[0];
            var len3 = ret[1];
            if (ret[3]) {
                ptr3 = 0; len3 = 0;
                throw takeFromExternrefTable0(ret[2]);
            }
            deferred4_0 = ptr3;
            deferred4_1 = len3;
            return getStringFromWasm0(ptr3, len3);
        } finally {
            wasm.__wbindgen_free(deferred4_0, deferred4_1, 1);
        }
    }
    /**
     * The call text of a saved query with the named arguments `args` (JSON text of an
     * object): `g.query("name", #{..})`.
     * @param {string} name
     * @param {string} args
     * @returns {string}
     */
    queryCallText(name, args) {
        let deferred4_0;
        let deferred4_1;
        try {
            const ptr0 = passStringToWasm0(name, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len0 = WASM_VECTOR_LEN;
            const ptr1 = passStringToWasm0(args, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len1 = WASM_VECTOR_LEN;
            const ret = wasm.playground_queryCallText(this.__wbg_ptr, ptr0, len0, ptr1, len1);
            var ptr3 = ret[0];
            var len3 = ret[1];
            if (ret[3]) {
                ptr3 = 0; len3 = 0;
                throw takeFromExternrefTable0(ret[2]);
            }
            deferred4_0 = ptr3;
            deferred4_1 = len3;
            return getStringFromWasm0(ptr3, len3);
        } finally {
            wasm.__wbindgen_free(deferred4_0, deferred4_1, 1);
        }
    }
    /**
     * Rebuilds the rule's dictionary and re-encodes its values (no data change): its entry.
     * @param {string} name
     * @returns {string}
     */
    recompress(name) {
        let deferred3_0;
        let deferred3_1;
        try {
            const ptr0 = passStringToWasm0(name, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len0 = WASM_VECTOR_LEN;
            const ret = wasm.playground_recompress(this.__wbg_ptr, ptr0, len0);
            var ptr2 = ret[0];
            var len2 = ret[1];
            if (ret[3]) {
                ptr2 = 0; len2 = 0;
                throw takeFromExternrefTable0(ret[2]);
            }
            deferred3_0 = ptr2;
            deferred3_1 = len2;
            return getStringFromWasm0(ptr2, len2);
        } finally {
            wasm.__wbindgen_free(deferred3_0, deferred3_1, 1);
        }
    }
    /**
     * Rolls the store back to `{target, delete}`: `{rollback, graph, store}`.
     * @param {string} body
     * @returns {string}
     */
    rollback(body) {
        let deferred3_0;
        let deferred3_1;
        try {
            const ptr0 = passStringToWasm0(body, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len0 = WASM_VECTOR_LEN;
            const ret = wasm.playground_rollback(this.__wbg_ptr, ptr0, len0);
            var ptr2 = ret[0];
            var len2 = ret[1];
            if (ret[3]) {
                ptr2 = 0; len2 = 0;
                throw takeFromExternrefTable0(ret[2]);
            }
            deferred3_0 = ptr2;
            deferred3_1 = len2;
            return getStringFromWasm0(ptr2, len2);
        } finally {
            wasm.__wbindgen_free(deferred3_0, deferred3_1, 1);
        }
    }
    /**
     * `[{kind, title, description, available}]`: the sample graphs.
     * @returns {string}
     */
    static sampleGraphs() {
        let deferred1_0;
        let deferred1_1;
        try {
            const ret = wasm.playground_sampleGraphs();
            deferred1_0 = ret[0];
            deferred1_1 = ret[1];
            return getStringFromWasm0(ret[0], ret[1]);
        } finally {
            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
    }
    /**
     * "Catalog ▸ Save catalog": the whole catalog (saved queries, compression rules, every
     * other kind) as its JSON exchange form (`{"definitions": [..]}`).
     * @returns {string}
     */
    saveCatalog() {
        let deferred1_0;
        let deferred1_1;
        try {
            const ret = wasm.playground_saveCatalog(this.__wbg_ptr);
            deferred1_0 = ret[0];
            deferred1_1 = ret[1];
            return getStringFromWasm0(ret[0], ret[1]);
        } finally {
            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
    }
    /**
     * "Save graph": `{text, schema, warnings}`: the graph as GraphML text, the stored schema as
     * JSON text (`null` without one), checked by loading both back (schema first).
     * @returns {string}
     */
    saveGraphml() {
        let deferred2_0;
        let deferred2_1;
        try {
            const ret = wasm.playground_saveGraphml(this.__wbg_ptr);
            var ptr1 = ret[0];
            var len1 = ret[1];
            if (ret[3]) {
                ptr1 = 0; len1 = 0;
                throw takeFromExternrefTable0(ret[2]);
            }
            deferred2_0 = ptr1;
            deferred2_1 = len1;
            return getStringFromWasm0(ptr1, len1);
        } finally {
            wasm.__wbindgen_free(deferred2_0, deferred2_1, 1);
        }
    }
    /**
     * "Save graph" as GraphSON: `{text, schema, warnings}`: the graph as GraphSON 3.0 text (line
     * form), the stored schema as JSON text (`null` without one), checked by loading both back.
     * @returns {string}
     */
    saveGraphson() {
        let deferred2_0;
        let deferred2_1;
        try {
            const ret = wasm.playground_saveGraphson(this.__wbg_ptr);
            var ptr1 = ret[0];
            var len1 = ret[1];
            if (ret[3]) {
                ptr1 = 0; len1 = 0;
                throw takeFromExternrefTable0(ret[2]);
            }
            deferred2_0 = ptr1;
            deferred2_1 = len1;
            return getStringFromWasm0(ptr1, len1);
        } finally {
            wasm.__wbindgen_free(deferred2_0, deferred2_1, 1);
        }
    }
    /**
     * "Save graph" as a packed snapshot: the bytes of a `.gsnap` file (data, schema, lineage
     * id, commit position; lossless).
     * @returns {Uint8Array}
     */
    saveSnapshot() {
        const ret = wasm.playground_saveSnapshot(this.__wbg_ptr);
        if (ret[3]) {
            throw takeFromExternrefTable0(ret[2]);
        }
        var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
        return v1;
    }
    /**
     * The schema views of the schema `json` (the editor's draft) with the graph's label
     * counts: the same structure as [`Self::schema`], `source: "given"`.
     * @param {string} json
     * @returns {string}
     */
    schemaViewOf(json) {
        let deferred3_0;
        let deferred3_1;
        try {
            const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len0 = WASM_VECTOR_LEN;
            const ret = wasm.playground_schemaViewOf(this.__wbg_ptr, ptr0, len0);
            var ptr2 = ret[0];
            var len2 = ret[1];
            if (ret[3]) {
                ptr2 = 0; len2 = 0;
                throw takeFromExternrefTable0(ret[2]);
            }
            deferred3_0 = ptr2;
            deferred3_1 = len2;
            return getStringFromWasm0(ptr2, len2);
        } finally {
            wasm.__wbindgen_free(deferred3_0, deferred3_1, 1);
        }
    }
    /**
     * The schema views: `{mode, source, table, json, mermaid, graph: {nodes, edges}, truncated,
     * total_labels}`.
     * @returns {string}
     */
    schema() {
        let deferred1_0;
        let deferred1_1;
        try {
            const ret = wasm.playground_schema(this.__wbg_ptr);
            deferred1_0 = ret[0];
            deferred1_1 = ret[1];
            return getStringFromWasm0(ret[0], ret[1]);
        } finally {
            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
    }
    /**
     * `set_schema` ("Load schema"): replaces the graph's schema with JSON text in the schema
     * format; `mode` (`"none"`, `"open"`, `"closed"`, optional) replaces the schema's own mode
     * ("Freeze as open/closed": the inferred schema with a mode). Returns the graph info JSON.
     * Fails (and changes nothing) on an invalid schema or mode, or when the existing data
     * violates an `open`/`closed` schema.
     * @param {string} json
     * @param {string | null} [mode]
     * @returns {string}
     */
    setSchema(json, mode) {
        let deferred4_0;
        let deferred4_1;
        try {
            const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len0 = WASM_VECTOR_LEN;
            var ptr1 = isLikeNone(mode) ? 0 : passStringToWasm0(mode, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            var len1 = WASM_VECTOR_LEN;
            const ret = wasm.playground_setSchema(this.__wbg_ptr, ptr0, len0, ptr1, len1);
            var ptr3 = ret[0];
            var len3 = ret[1];
            if (ret[3]) {
                ptr3 = 0; len3 = 0;
                throw takeFromExternrefTable0(ret[2]);
            }
            deferred4_0 = ptr3;
            deferred4_1 = len3;
            return getStringFromWasm0(ptr3, len3);
        } finally {
            wasm.__wbindgen_free(deferred4_0, deferred4_1, 1);
        }
    }
    /**
     * The statistics panel: `{statistics, memory, limits: {presets, defaults}}` (see
     * [`Session::statistics`]).
     * @returns {string}
     */
    statistics() {
        let deferred1_0;
        let deferred1_1;
        try {
            const ret = wasm.playground_statistics(this.__wbg_ptr);
            deferred1_0 = ret[0];
            deferred1_1 = ret[1];
            return getStringFromWasm0(ret[0], ret[1]);
        } finally {
            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
    }
    /**
     * The Store menu (the store in memory): identity, position, snapshots, marks, attic, the
     * open view, sizes and the databases of the session (see `graphersal_session::store`).
     * @returns {string}
     */
    storeInfo() {
        let deferred2_0;
        let deferred2_1;
        try {
            const ret = wasm.playground_storeInfo(this.__wbg_ptr);
            var ptr1 = ret[0];
            var len1 = ret[1];
            if (ret[3]) {
                ptr1 = 0; len1 = 0;
                throw takeFromExternrefTable0(ret[2]);
            }
            deferred2_0 = ptr1;
            deferred2_1 = len1;
            return getStringFromWasm0(ptr1, len1);
        } finally {
            wasm.__wbindgen_free(deferred2_0, deferred2_1, 1);
        }
    }
    /**
     * The stored snapshot at `commit` (`undefined`: the latest) as `.gsnap` bytes.
     * @param {number | null} [commit]
     * @returns {Uint8Array}
     */
    storeSnapshot(commit) {
        const ret = wasm.playground_storeSnapshot(this.__wbg_ptr, !isLikeNone(commit), isLikeNone(commit) ? 0 : commit);
        if (ret[3]) {
            throw takeFromExternrefTable0(ret[2]);
        }
        var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
        return v1;
    }
    /**
     * Switches to database `id` (a fork): `{graph, store}`.
     * @param {string} id
     * @returns {string}
     */
    switchDatabase(id) {
        let deferred3_0;
        let deferred3_1;
        try {
            const ptr0 = passStringToWasm0(id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len0 = WASM_VECTOR_LEN;
            const ret = wasm.playground_switchDatabase(this.__wbg_ptr, ptr0, len0);
            var ptr2 = ret[0];
            var len2 = ret[1];
            if (ret[3]) {
                ptr2 = 0; len2 = 0;
                throw takeFromExternrefTable0(ret[2]);
            }
            deferred3_0 = ptr2;
            deferred3_1 = len2;
            return getStringFromWasm0(ptr2, len2);
        } finally {
            wasm.__wbindgen_free(deferred3_0, deferred3_1, 1);
        }
    }
    /**
     * The values of the DSL's token classes, `{class: [member, ...]}` (completion after `T.`,
     * `Order.`, ...; see [`Session::token_values`]).
     * @returns {string}
     */
    tokenValues() {
        let deferred1_0;
        let deferred1_1;
        try {
            const ret = wasm.playground_tokenValues(this.__wbg_ptr);
            deferred1_0 = ret[0];
            deferred1_1 = ret[1];
            return getStringFromWasm0(ret[0], ret[1]);
        } finally {
            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
    }
    /**
     * The property editor's Save (or, with `validateOnly`, its check): `request` is JSON
     * `{kind, id, set: [[key, typed]], remove: [key], validateOnly?}`, written as one unit;
     * answers `{ok, changed, element}` or `{ok: false, errors: [{field, message, help?}]}`.
     * @param {string} request
     * @returns {string}
     */
    updateElement(request) {
        let deferred3_0;
        let deferred3_1;
        try {
            const ptr0 = passStringToWasm0(request, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len0 = WASM_VECTOR_LEN;
            const ret = wasm.playground_updateElement(this.__wbg_ptr, ptr0, len0);
            var ptr2 = ret[0];
            var len2 = ret[1];
            if (ret[3]) {
                ptr2 = 0; len2 = 0;
                throw takeFromExternrefTable0(ret[2]);
            }
            deferred3_0 = ptr2;
            deferred3_1 = len2;
            return getStringFromWasm0(ptr2, len2);
        } finally {
            wasm.__wbindgen_free(deferred3_0, deferred3_1, 1);
        }
    }
    /**
     * `validate_schema_patch`: `validateSchema` of the stored schema patched with `patch`.
     * @param {string} patch
     * @returns {string}
     */
    validateSchemaPatch(patch) {
        let deferred3_0;
        let deferred3_1;
        try {
            const ptr0 = passStringToWasm0(patch, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len0 = WASM_VECTOR_LEN;
            const ret = wasm.playground_validateSchemaPatch(this.__wbg_ptr, ptr0, len0);
            var ptr2 = ret[0];
            var len2 = ret[1];
            if (ret[3]) {
                ptr2 = 0; len2 = 0;
                throw takeFromExternrefTable0(ret[2]);
            }
            deferred3_0 = ptr2;
            deferred3_1 = len2;
            return getStringFromWasm0(ptr2, len2);
        } finally {
            wasm.__wbindgen_free(deferred3_0, deferred3_1, 1);
        }
    }
    /**
     * `validate_schema`: `{violations, diff, compatible}` of a proposed schema (JSON text)
     * against the data; nothing is applied.
     * @param {string} json
     * @returns {string}
     */
    validateSchema(json) {
        let deferred3_0;
        let deferred3_1;
        try {
            const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len0 = WASM_VECTOR_LEN;
            const ret = wasm.playground_validateSchema(this.__wbg_ptr, ptr0, len0);
            var ptr2 = ret[0];
            var len2 = ret[1];
            if (ret[3]) {
                ptr2 = 0; len2 = 0;
                throw takeFromExternrefTable0(ret[2]);
            }
            deferred3_0 = ptr2;
            deferred3_1 = len2;
            return getStringFromWasm0(ptr2, len2);
        } finally {
            wasm.__wbindgen_free(deferred3_0, deferred3_1, 1);
        }
    }
    /**
     * Scrubs the store: `{verify}`.
     * @returns {string}
     */
    verifyStore() {
        let deferred2_0;
        let deferred2_1;
        try {
            const ret = wasm.playground_verifyStore(this.__wbg_ptr);
            var ptr1 = ret[0];
            var len1 = ret[1];
            if (ret[3]) {
                ptr1 = 0; len1 = 0;
                throw takeFromExternrefTable0(ret[2]);
            }
            deferred2_0 = ptr1;
            deferred2_1 = len1;
            return getStringFromWasm0(ptr1, len1);
        } finally {
            wasm.__wbindgen_free(deferred2_0, deferred2_1, 1);
        }
    }
    /**
     * The engine version (the workspace version).
     * @returns {string}
     */
    static version() {
        let deferred1_0;
        let deferred1_1;
        try {
            const ret = wasm.playground_version();
            deferred1_0 = ret[0];
            deferred1_1 = ret[1];
            return getStringFromWasm0(ret[0], ret[1]);
        } finally {
            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
    }
}
if (Symbol.dispose) Playground.prototype[Symbol.dispose] = Playground.prototype.free;
function __wbg_get_imports() {
    const import0 = {
        __proto__: null,
        __wbg_Error_30c8987f7c2ed4e2: function(arg0, arg1) {
            const ret = Error(getStringFromWasm0(arg0, arg1));
            return ret;
        },
        __wbg___wbindgen_is_function_1f9d30630b8b1d3d: function(arg0) {
            const ret = typeof(arg0) === 'function';
            return ret;
        },
        __wbg___wbindgen_is_object_3c45d4f2dde4e749: function(arg0) {
            const val = arg0;
            const ret = typeof(val) === 'object' && val !== null;
            return ret;
        },
        __wbg___wbindgen_is_string_90b56bc79aad6f6c: function(arg0) {
            const ret = typeof(arg0) === 'string';
            return ret;
        },
        __wbg___wbindgen_is_undefined_8865fb403f8fe9d8: function(arg0) {
            const ret = arg0 === undefined;
            return ret;
        },
        __wbg___wbindgen_throw_41e9ee4f547fc59a: function(arg0, arg1) {
            throw new Error(getStringFromWasm0(arg0, arg1));
        },
        __wbg_call_187d372bd5fdd4aa: function() { return handleError(function (arg0, arg1, arg2) {
            const ret = arg0.call(arg1, arg2);
            return ret;
        }, arguments); },
        __wbg_crypto_38df2bab126b63dc: function(arg0) {
            const ret = arg0.crypto;
            return ret;
        },
        __wbg_getRandomValues_a608c4436c19407a: function() { return handleError(function (arg0, arg1) {
            globalThis.crypto.getRandomValues(getArrayU8FromWasm0(arg0, arg1));
        }, arguments); },
        __wbg_getRandomValues_c44a50d8cfdaebeb: function() { return handleError(function (arg0, arg1) {
            arg0.getRandomValues(arg1);
        }, arguments); },
        __wbg_length_7f3c00c40364105e: function(arg0) {
            const ret = arg0.length;
            return ret;
        },
        __wbg_msCrypto_bd5a034af96bcba6: function(arg0) {
            const ret = arg0.msCrypto;
            return ret;
        },
        __wbg_new_with_length_3da0ad195f6f63ba: function(arg0) {
            const ret = new Uint8Array(arg0 >>> 0);
            return ret;
        },
        __wbg_node_84ea875411254db1: function(arg0) {
            const ret = arg0.node;
            return ret;
        },
        __wbg_now_aa4ccb83129e9e55: function() {
            const ret = Date.now();
            return ret;
        },
        __wbg_now_e7c6795a7f81e10f: function(arg0) {
            const ret = arg0.now();
            return ret;
        },
        __wbg_performance_3fcf6e32a7e1ed0a: function(arg0) {
            const ret = arg0.performance;
            return ret;
        },
        __wbg_process_44c7a14e11e9f69e: function(arg0) {
            const ret = arg0.process;
            return ret;
        },
        __wbg_prototypesetcall_bc27214492979395: function(arg0, arg1, arg2) {
            Uint8Array.prototype.set.call(getArrayU8FromWasm0(arg0, arg1), arg2);
        },
        __wbg_randomFillSync_6c25eac9869eb53c: function() { return handleError(function (arg0, arg1) {
            arg0.randomFillSync(arg1);
        }, arguments); },
        __wbg_require_b4edbdcf3e2a1ef0: function() { return handleError(function () {
            const ret = module.require;
            return ret;
        }, arguments); },
        __wbg_static_accessor_GLOBAL_266715b9d96ba635: function() {
            const ret = typeof global === 'undefined' ? null : global;
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        },
        __wbg_static_accessor_GLOBAL_THIS_10fb7dc1ae063179: function() {
            const ret = typeof globalThis === 'undefined' ? null : globalThis;
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        },
        __wbg_static_accessor_SELF_0b583911f537483a: function() {
            const ret = typeof self === 'undefined' ? null : self;
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        },
        __wbg_static_accessor_WINDOW_d7f903d1508cbdc4: function() {
            const ret = typeof window === 'undefined' ? null : window;
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        },
        __wbg_subarray_002b94d5e13d1411: function(arg0, arg1, arg2) {
            const ret = arg0.subarray(arg1 >>> 0, arg2 >>> 0);
            return ret;
        },
        __wbg_versions_276b2795b1c6a219: function(arg0) {
            const ret = arg0.versions;
            return ret;
        },
        __wbindgen_generic_0000000000000001: function(arg0, arg1) {
            // Cast intrinsic for `Ref(Slice(U8)) -> NamedExternref("Uint8Array")`.
            const ret = getArrayU8FromWasm0(arg0, arg1);
            return ret;
        },
        __wbindgen_generic_0000000000000002: function(arg0, arg1) {
            // Cast intrinsic for `Ref(String) -> Externref`.
            const ret = getStringFromWasm0(arg0, arg1);
            return ret;
        },
        __wbindgen_init_externref_table: function() {
            const table = wasm.__wbindgen_externrefs;
            const offset = table.grow(4);
            table.set(0, undefined);
            table.set(offset + 0, undefined);
            table.set(offset + 1, null);
            table.set(offset + 2, true);
            table.set(offset + 3, false);
        },
    };
    return {
        __proto__: null,
        "./graphersal_wasm_bg.js": import0,
    };
}

const PlaygroundFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_playground_free(ptr, 1));

function addToExternrefTable0(obj) {
    const idx = wasm.__externref_table_alloc();
    wasm.__wbindgen_externrefs.set(idx, obj);
    return idx;
}

function getArrayF32FromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return getFloat32ArrayMemory0().subarray(ptr / 4, ptr / 4 + len);
}

function getArrayU8FromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return getUint8ArrayMemory0().subarray(ptr / 1, ptr / 1 + len);
}

let cachedFloat32ArrayMemory0 = null;
function getFloat32ArrayMemory0() {
    if (cachedFloat32ArrayMemory0 === null || cachedFloat32ArrayMemory0.byteLength === 0) {
        cachedFloat32ArrayMemory0 = new Float32Array(wasm.memory.buffer);
    }
    return cachedFloat32ArrayMemory0;
}

function getStringFromWasm0(ptr, len) {
    return decodeText(ptr >>> 0, len);
}

let cachedUint32ArrayMemory0 = null;
function getUint32ArrayMemory0() {
    if (cachedUint32ArrayMemory0 === null || cachedUint32ArrayMemory0.byteLength === 0) {
        cachedUint32ArrayMemory0 = new Uint32Array(wasm.memory.buffer);
    }
    return cachedUint32ArrayMemory0;
}

let cachedUint8ArrayMemory0 = null;
function getUint8ArrayMemory0() {
    if (cachedUint8ArrayMemory0 === null || cachedUint8ArrayMemory0.byteLength === 0) {
        cachedUint8ArrayMemory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachedUint8ArrayMemory0;
}

function handleError(f, args) {
    try {
        return f.apply(this, args);
    } catch (e) {
        const idx = addToExternrefTable0(e);
        wasm.__wbindgen_exn_store(idx);
    }
}

function isLikeNone(x) {
    return x === undefined || x === null;
}

function passArray32ToWasm0(arg, malloc) {
    const ptr = malloc(arg.length * 4, 4) >>> 0;
    getUint32ArrayMemory0().set(arg, ptr / 4);
    WASM_VECTOR_LEN = arg.length;
    return ptr;
}

function passArray8ToWasm0(arg, malloc) {
    const ptr = malloc(arg.length * 1, 1) >>> 0;
    getUint8ArrayMemory0().set(arg, ptr / 1);
    WASM_VECTOR_LEN = arg.length;
    return ptr;
}

function passStringToWasm0(arg, malloc, realloc) {
    if (realloc === undefined) {
        const buf = cachedTextEncoder.encode(arg);
        const ptr = malloc(buf.length, 1) >>> 0;
        getUint8ArrayMemory0().subarray(ptr, ptr + buf.length).set(buf);
        WASM_VECTOR_LEN = buf.length;
        return ptr;
    }

    let len = arg.length;
    let ptr = malloc(len, 1) >>> 0;

    const mem = getUint8ArrayMemory0();

    let offset = 0;

    for (; offset < len; offset++) {
        const code = arg.charCodeAt(offset);
        if (code > 0x7F) break;
        mem[ptr + offset] = code;
    }
    if (offset !== len) {
        if (offset !== 0) {
            arg = arg.slice(offset);
        }
        ptr = realloc(ptr, len, len = offset + arg.length * 3, 1) >>> 0;
        const view = getUint8ArrayMemory0().subarray(ptr + offset, ptr + len);
        const ret = cachedTextEncoder.encodeInto(arg, view);

        offset += ret.written;
        ptr = realloc(ptr, len, offset, 1) >>> 0;
    }

    WASM_VECTOR_LEN = offset;
    return ptr;
}

function takeFromExternrefTable0(idx) {
    const value = wasm.__wbindgen_externrefs.get(idx);
    wasm.__externref_table_dealloc(idx);
    return value;
}

let cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });
cachedTextDecoder.decode();
const MAX_SAFARI_DECODE_BYTES = 2146435072;
let numBytesDecoded = 0;
function decodeText(ptr, len) {
    numBytesDecoded += len;
    if (numBytesDecoded >= MAX_SAFARI_DECODE_BYTES) {
        cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });
        cachedTextDecoder.decode();
        numBytesDecoded = len;
    }
    return cachedTextDecoder.decode(getUint8ArrayMemory0().subarray(ptr, ptr + len));
}

const cachedTextEncoder = new TextEncoder();

if (!('encodeInto' in cachedTextEncoder)) {
    cachedTextEncoder.encodeInto = function (arg, view) {
        const buf = cachedTextEncoder.encode(arg);
        view.set(buf);
        return {
            read: arg.length,
            written: buf.length
        };
    };
}

let WASM_VECTOR_LEN = 0;

let wasmModule, wasmInstance, wasm;
function __wbg_finalize_init(instance, module) {
    wasmInstance = instance;
    wasm = instance.exports;
    wasmModule = module;
    cachedFloat32ArrayMemory0 = null;
    cachedUint32ArrayMemory0 = null;
    cachedUint8ArrayMemory0 = null;
    wasm.__wbindgen_start();
    return wasm;
}

async function __wbg_load(module, imports) {
    if (typeof Response === 'function' && module instanceof Response) {
        if (!module.ok) {
            throw new Error(`failed to fetch Wasm: ${module.status} ${module.statusText} fetching '${module.url}'`);
        }

        if (typeof WebAssembly.instantiateStreaming === 'function') {
            try {
                return await WebAssembly.instantiateStreaming(module, imports);
            } catch (e) {
                const validResponse = expectedResponseType(module.type);

                if (validResponse && module.headers.get('Content-Type') !== 'application/wasm') {
                    console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", e);

                } else { throw e; }
            }
        }

        const bytes = await module.arrayBuffer();
        return await WebAssembly.instantiate(bytes, imports);
    } else {
        const instance = await WebAssembly.instantiate(module, imports);

        if (instance instanceof WebAssembly.Instance) {
            return { instance, module };
        } else {
            return instance;
        }
    }

    function expectedResponseType(type) {
        switch (type) {
            case 'basic': case 'cors': case 'default': return true;
        }
        return false;
    }
}

function initSync(module) {
    if (wasm !== undefined) return wasm;


    if (module !== undefined) {
        if (Object.getPrototypeOf(module) === Object.prototype) {
            ({module} = module)
        } else {
            console.warn('using deprecated parameters for `initSync()`; pass a single object instead')
        }
    }

    const imports = __wbg_get_imports();
    if (!(module instanceof WebAssembly.Module)) {
        module = new WebAssembly.Module(module);
    }
    const instance = new WebAssembly.Instance(module, imports);
    return __wbg_finalize_init(instance, module);
}

async function __wbg_init(module_or_path) {
    if (wasm !== undefined) return wasm;


    if (module_or_path !== undefined) {
        if (Object.getPrototypeOf(module_or_path) === Object.prototype) {
            ({module_or_path} = module_or_path)
        } else {
            console.warn('using deprecated parameters for the initialization function; pass a single object instead')
        }
    }

    if (module_or_path === undefined) {
        module_or_path = new URL('graphersal_wasm_bg.wasm', import.meta.url);
    }
    const imports = __wbg_get_imports();

    if (typeof module_or_path === 'string' || (typeof Request === 'function' && module_or_path instanceof Request) || (typeof URL === 'function' && module_or_path instanceof URL)) {
        module_or_path = fetch(module_or_path);
    }

    const { instance, module } = await __wbg_load(await module_or_path, imports);

    return __wbg_finalize_init(instance, module);
}

export { initSync, __wbg_init as default };
