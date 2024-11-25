// <auto-generated/>

#nullable disable

using System;
using System.ClientModel;
using System.ClientModel.Primitives;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Todo.Models;

namespace Todo
{
    /// <summary></summary>
    public partial class TodoItems
    {
        private readonly Uri _endpoint;
        private const string AuthorizationHeader = "session-id";
        /// <summary> A credential used to authenticate to the service. </summary>
        private readonly ApiKeyCredential _keyCredential;
        private TodoItemsAttachments _cachedTodoItemsAttachments;

        /// <summary> Initializes a new instance of TodoItems for mocking. </summary>
        protected TodoItems()
        {
        }

        internal TodoItems(ClientPipeline pipeline, ApiKeyCredential keyCredential, Uri endpoint)
        {
            _endpoint = endpoint;
            Pipeline = pipeline;
            _keyCredential = keyCredential;
        }

        /// <summary> The HTTP pipeline for sending and receiving REST requests and responses. </summary>
        public ClientPipeline Pipeline { get; }

        /// <summary>
        /// [Protocol Method] list
        /// <list type="bullet">
        /// <item>
        /// <description> This <see href="https://aka.ms/azsdk/net/protocol-methods">protocol method</see> allows explicit creation of the request and processing of the response for advanced scenarios. </description>
        /// </item>
        /// </list>
        /// </summary>
        /// <param name="limit"> The limit to the number of items. </param>
        /// <param name="offset"> The offset to start paginating at. </param>
        /// <param name="options"> The request options, which can override default behaviors of the client pipeline on a per-call basis. </param>
        /// <exception cref="ClientResultException"> Service returned a non-success status code. </exception>
        /// <returns> The response returned from the service. </returns>
        public virtual ClientResult List(int? limit, int? offset, RequestOptions options = null)
        {
            using PipelineMessage message = CreateListRequest(limit, offset, options);
            return ClientResult.FromResponse(Pipeline.ProcessMessage(message, options));
        }

        /// <summary>
        /// [Protocol Method] list
        /// <list type="bullet">
        /// <item>
        /// <description> This <see href="https://aka.ms/azsdk/net/protocol-methods">protocol method</see> allows explicit creation of the request and processing of the response for advanced scenarios. </description>
        /// </item>
        /// </list>
        /// </summary>
        /// <param name="limit"> The limit to the number of items. </param>
        /// <param name="offset"> The offset to start paginating at. </param>
        /// <param name="options"> The request options, which can override default behaviors of the client pipeline on a per-call basis. </param>
        /// <exception cref="ClientResultException"> Service returned a non-success status code. </exception>
        /// <returns> The response returned from the service. </returns>
        public virtual async Task<ClientResult> ListAsync(int? limit, int? offset, RequestOptions options = null)
        {
            using PipelineMessage message = CreateListRequest(limit, offset, options);
            return ClientResult.FromResponse(await Pipeline.ProcessMessageAsync(message, options).ConfigureAwait(false));
        }

        /// <summary> list. </summary>
        /// <param name="limit"> The limit to the number of items. </param>
        /// <param name="offset"> The offset to start paginating at. </param>
        /// <exception cref="ClientResultException"> Service returned a non-success status code. </exception>
        public virtual ClientResult<TodoPage> List(int? limit = null, int? offset = null)
        {
            ClientResult result = List(limit, offset, null);
            return ClientResult.FromValue((TodoPage)result, result.GetRawResponse());
        }

        /// <summary> list. </summary>
        /// <param name="limit"> The limit to the number of items. </param>
        /// <param name="offset"> The offset to start paginating at. </param>
        /// <exception cref="ClientResultException"> Service returned a non-success status code. </exception>
        public virtual async Task<ClientResult<TodoPage>> ListAsync(int? limit = null, int? offset = null)
        {
            ClientResult result = await ListAsync(limit, offset, null).ConfigureAwait(false);
            return ClientResult.FromValue((TodoPage)result, result.GetRawResponse());
        }

        /// <summary>
        /// [Protocol Method] create
        /// <list type="bullet">
        /// <item>
        /// <description> This <see href="https://aka.ms/azsdk/net/protocol-methods">protocol method</see> allows explicit creation of the request and processing of the response for advanced scenarios. </description>
        /// </item>
        /// </list>
        /// </summary>
        /// <param name="content"> The content to send as the body of the request. </param>
        /// <param name="options"> The request options, which can override default behaviors of the client pipeline on a per-call basis. </param>
        /// <exception cref="ArgumentNullException"> <paramref name="content"/> is null. </exception>
        /// <exception cref="ClientResultException"> Service returned a non-success status code. </exception>
        /// <returns> The response returned from the service. </returns>
        public virtual ClientResult Create(BinaryContent content, RequestOptions options = null)
        {
            Argument.AssertNotNull(content, nameof(content));

            using PipelineMessage message = CreateCreateRequest(content, options);
            return ClientResult.FromResponse(Pipeline.ProcessMessage(message, options));
        }

        /// <summary>
        /// [Protocol Method] create
        /// <list type="bullet">
        /// <item>
        /// <description> This <see href="https://aka.ms/azsdk/net/protocol-methods">protocol method</see> allows explicit creation of the request and processing of the response for advanced scenarios. </description>
        /// </item>
        /// </list>
        /// </summary>
        /// <param name="content"> The content to send as the body of the request. </param>
        /// <param name="options"> The request options, which can override default behaviors of the client pipeline on a per-call basis. </param>
        /// <exception cref="ArgumentNullException"> <paramref name="content"/> is null. </exception>
        /// <exception cref="ClientResultException"> Service returned a non-success status code. </exception>
        /// <returns> The response returned from the service. </returns>
        public virtual async Task<ClientResult> CreateAsync(BinaryContent content, RequestOptions options = null)
        {
            Argument.AssertNotNull(content, nameof(content));

            using PipelineMessage message = CreateCreateRequest(content, options);
            return ClientResult.FromResponse(await Pipeline.ProcessMessageAsync(message, options).ConfigureAwait(false));
        }

        /// <summary> create. </summary>
        /// <param name="item"></param>
        /// <param name="attachments"></param>
        /// <exception cref="ArgumentNullException"> <paramref name="item"/> is null. </exception>
        /// <exception cref="ClientResultException"> Service returned a non-success status code. </exception>
        public virtual ClientResult<CreateResponse> Create(TodoItem item, IEnumerable<BinaryData> attachments = default)
        {
            Argument.AssertNotNull(item, nameof(item));

            CreateRequest spreadModel = new CreateRequest(item, attachments?.ToList() as IList<BinaryData> ?? new ChangeTrackingList<BinaryData>(), null);
            ClientResult result = Create(spreadModel, null);
            return ClientResult.FromValue((CreateResponse)result, result.GetRawResponse());
        }

        /// <summary> create. </summary>
        /// <param name="item"></param>
        /// <param name="attachments"></param>
        /// <exception cref="ArgumentNullException"> <paramref name="item"/> is null. </exception>
        /// <exception cref="ClientResultException"> Service returned a non-success status code. </exception>
        public virtual async Task<ClientResult<CreateResponse>> CreateAsync(TodoItem item, IEnumerable<BinaryData> attachments = default)
        {
            Argument.AssertNotNull(item, nameof(item));

            CreateRequest spreadModel = new CreateRequest(item, attachments?.ToList() as IList<BinaryData> ?? new ChangeTrackingList<BinaryData>(), null);
            ClientResult result = await CreateAsync(spreadModel, null).ConfigureAwait(false);
            return ClientResult.FromValue((CreateResponse)result, result.GetRawResponse());
        }

        /// <summary>
        /// [Protocol Method] get
        /// <list type="bullet">
        /// <item>
        /// <description> This <see href="https://aka.ms/azsdk/net/protocol-methods">protocol method</see> allows explicit creation of the request and processing of the response for advanced scenarios. </description>
        /// </item>
        /// </list>
        /// </summary>
        /// <param name="id"></param>
        /// <param name="options"> The request options, which can override default behaviors of the client pipeline on a per-call basis. </param>
        /// <exception cref="ClientResultException"> Service returned a non-success status code. </exception>
        /// <returns> The response returned from the service. </returns>
        public virtual ClientResult Get(long id, RequestOptions options)
        {
            using PipelineMessage message = CreateGetRequest(id, options);
            return ClientResult.FromResponse(Pipeline.ProcessMessage(message, options));
        }

        /// <summary>
        /// [Protocol Method] get
        /// <list type="bullet">
        /// <item>
        /// <description> This <see href="https://aka.ms/azsdk/net/protocol-methods">protocol method</see> allows explicit creation of the request and processing of the response for advanced scenarios. </description>
        /// </item>
        /// </list>
        /// </summary>
        /// <param name="id"></param>
        /// <param name="options"> The request options, which can override default behaviors of the client pipeline on a per-call basis. </param>
        /// <exception cref="ClientResultException"> Service returned a non-success status code. </exception>
        /// <returns> The response returned from the service. </returns>
        public virtual async Task<ClientResult> GetAsync(long id, RequestOptions options)
        {
            using PipelineMessage message = CreateGetRequest(id, options);
            return ClientResult.FromResponse(await Pipeline.ProcessMessageAsync(message, options).ConfigureAwait(false));
        }

        /// <summary> get. </summary>
        /// <param name="id"></param>
        /// <exception cref="ClientResultException"> Service returned a non-success status code. </exception>
        public virtual ClientResult<GetResponse> Get(long id)
        {
            ClientResult result = Get(id, null);
            return ClientResult.FromValue((GetResponse)result, result.GetRawResponse());
        }

        /// <summary> get. </summary>
        /// <param name="id"></param>
        /// <exception cref="ClientResultException"> Service returned a non-success status code. </exception>
        public virtual async Task<ClientResult<GetResponse>> GetAsync(long id)
        {
            ClientResult result = await GetAsync(id, null).ConfigureAwait(false);
            return ClientResult.FromValue((GetResponse)result, result.GetRawResponse());
        }

        /// <summary>
        /// [Protocol Method] update
        /// <list type="bullet">
        /// <item>
        /// <description> This <see href="https://aka.ms/azsdk/net/protocol-methods">protocol method</see> allows explicit creation of the request and processing of the response for advanced scenarios. </description>
        /// </item>
        /// </list>
        /// </summary>
        /// <param name="id"></param>
        /// <param name="content"> The content to send as the body of the request. </param>
        /// <param name="options"> The request options, which can override default behaviors of the client pipeline on a per-call basis. </param>
        /// <exception cref="ArgumentNullException"> <paramref name="content"/> is null. </exception>
        /// <exception cref="ClientResultException"> Service returned a non-success status code. </exception>
        /// <returns> The response returned from the service. </returns>
        public virtual ClientResult Update(long id, BinaryContent content, RequestOptions options = null)
        {
            Argument.AssertNotNull(content, nameof(content));

            using PipelineMessage message = CreateUpdateRequest(id, content, options);
            return ClientResult.FromResponse(Pipeline.ProcessMessage(message, options));
        }

        /// <summary>
        /// [Protocol Method] update
        /// <list type="bullet">
        /// <item>
        /// <description> This <see href="https://aka.ms/azsdk/net/protocol-methods">protocol method</see> allows explicit creation of the request and processing of the response for advanced scenarios. </description>
        /// </item>
        /// </list>
        /// </summary>
        /// <param name="id"></param>
        /// <param name="content"> The content to send as the body of the request. </param>
        /// <param name="options"> The request options, which can override default behaviors of the client pipeline on a per-call basis. </param>
        /// <exception cref="ArgumentNullException"> <paramref name="content"/> is null. </exception>
        /// <exception cref="ClientResultException"> Service returned a non-success status code. </exception>
        /// <returns> The response returned from the service. </returns>
        public virtual async Task<ClientResult> UpdateAsync(long id, BinaryContent content, RequestOptions options = null)
        {
            Argument.AssertNotNull(content, nameof(content));

            using PipelineMessage message = CreateUpdateRequest(id, content, options);
            return ClientResult.FromResponse(await Pipeline.ProcessMessageAsync(message, options).ConfigureAwait(false));
        }

        /// <summary>
        /// [Protocol Method] delete
        /// <list type="bullet">
        /// <item>
        /// <description> This <see href="https://aka.ms/azsdk/net/protocol-methods">protocol method</see> allows explicit creation of the request and processing of the response for advanced scenarios. </description>
        /// </item>
        /// </list>
        /// </summary>
        /// <param name="id"></param>
        /// <param name="options"> The request options, which can override default behaviors of the client pipeline on a per-call basis. </param>
        /// <exception cref="ClientResultException"> Service returned a non-success status code. </exception>
        /// <returns> The response returned from the service. </returns>
        public virtual ClientResult Delete(long id, RequestOptions options)
        {
            using PipelineMessage message = CreateDeleteRequest(id, options);
            return ClientResult.FromResponse(Pipeline.ProcessMessage(message, options));
        }

        /// <summary>
        /// [Protocol Method] delete
        /// <list type="bullet">
        /// <item>
        /// <description> This <see href="https://aka.ms/azsdk/net/protocol-methods">protocol method</see> allows explicit creation of the request and processing of the response for advanced scenarios. </description>
        /// </item>
        /// </list>
        /// </summary>
        /// <param name="id"></param>
        /// <param name="options"> The request options, which can override default behaviors of the client pipeline on a per-call basis. </param>
        /// <exception cref="ClientResultException"> Service returned a non-success status code. </exception>
        /// <returns> The response returned from the service. </returns>
        public virtual async Task<ClientResult> DeleteAsync(long id, RequestOptions options)
        {
            using PipelineMessage message = CreateDeleteRequest(id, options);
            return ClientResult.FromResponse(await Pipeline.ProcessMessageAsync(message, options).ConfigureAwait(false));
        }

        /// <summary> delete. </summary>
        /// <param name="id"></param>
        /// <exception cref="ClientResultException"> Service returned a non-success status code. </exception>
        public virtual ClientResult Delete(long id)
        {
            return Delete(id, null);
        }

        /// <summary> delete. </summary>
        /// <param name="id"></param>
        /// <exception cref="ClientResultException"> Service returned a non-success status code. </exception>
        public virtual async Task<ClientResult> DeleteAsync(long id)
        {
            return await DeleteAsync(id, null).ConfigureAwait(false);
        }

        /// <summary> Initializes a new instance of TodoItemsAttachments. </summary>
        public virtual TodoItemsAttachments GetTodoItemsAttachmentsClient()
        {
            return Volatile.Read(ref _cachedTodoItemsAttachments) ?? Interlocked.CompareExchange(ref _cachedTodoItemsAttachments, new TodoItemsAttachments(Pipeline, _keyCredential, _endpoint), null) ?? _cachedTodoItemsAttachments;
        }
    }
}
