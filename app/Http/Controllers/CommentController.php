<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Comment;

class CommentController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        if($request->input('callback_id')) {
            $comments = Comment::with('user', 'callback')
                ->where('callback_id', $request->input('callback_id'))
                ->paginate(10);
        } else {
            $comments = Comment::with('user', 'callback')->orderBy('id', 'DESC')->paginate(10);
        }
        return response()->json(['data' => $comments], 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        if(auth("api")->user()->user_role !== 'admin') {
            return response()->json(['message' => 'Unauthorized'], 401);
        }

        $this->validate($request, [
            'callback_id' => 'required|integer',
            'description' => 'required|string',
        ]);

        $comment = Comment::create([
            'user_id' => auth()->user()->id,
            'callback_id' => $request->callback_id,
            'description' => $request->description,
        ]);

        return response()->json(['data' => $comment, 'message' => 'Created successfully'], 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $comment = Comment::with('user', 'callback')->findOrFail($id);

        return response()->json(['data' => $comment], 200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $request->validate([
            'description' => 'required|string',
        ]);

        $comment = Comment::findOrFail($id);

        if(auth("api")->user()->user_role !== 'admin') {
            return response()->json(['message' => 'Unauthorized'], 401);
        }

        $comment = Comment::where('id', $id)->update(
            array(
                'description' => $request->description,
            )
        );

        return response()->json(['data' => $comment, 'message' => 'Updated successfully'], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $comment = Comment::findOrFail($id);

        if(auth("api")->user()->user_role !== 'admin') {
            return response()->json(['message' => 'Unauthorized'], 401);
        }

        $comment->delete();

        return response()->json(['message' => 'Deleted successfully'], 200);
    }
}
